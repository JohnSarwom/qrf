"""Render an accurate Papua New Guinea silhouette from Natural Earth GeoJSON.

Source: Natural Earth 1:10m Admin 0 Countries
https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


def polygon_groups(geometry: dict) -> list[list[list[list[float]]]]:
    if geometry["type"] == "Polygon":
        return [geometry["coordinates"]]
    if geometry["type"] == "MultiPolygon":
        return geometry["coordinates"]
    raise ValueError(f"Unsupported geometry type: {geometry['type']}")


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: generate-png-map.py INPUT.geojson OUTPUT.png")

    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    collection = json.loads(source.read_text(encoding="utf-8"))
    feature = next(
        item
        for item in collection["features"]
        if item["properties"].get("ADMIN") == "Papua New Guinea"
        or item["properties"].get("ADM0_A3") == "PNG"
    )
    groups = polygon_groups(feature["geometry"])
    points = [point for polygon in groups for ring in polygon for point in ring]
    min_lon = min(point[0] for point in points)
    max_lon = max(point[0] for point in points)
    min_lat = min(point[1] for point in points)
    max_lat = max(point[1] for point in points)

    width, height = 1600, 940
    padding = 90
    scale = min(
        (width - 2 * padding) / (max_lon - min_lon),
        (height - 2 * padding) / (max_lat - min_lat),
    )
    offset_x = (width - (max_lon - min_lon) * scale) / 2
    offset_y = (height - (max_lat - min_lat) * scale) / 2

    def project(point: list[float]) -> tuple[float, float]:
        return (
            offset_x + (point[0] - min_lon) * scale,
            offset_y + (max_lat - point[1]) * scale,
        )

    mask = Image.new("L", (width, height), 0)
    mask_draw = ImageDraw.Draw(mask)
    for polygon in groups:
        mask_draw.polygon([project(point) for point in polygon[0]], fill=255)
        for hole in polygon[1:]:
            mask_draw.polygon([project(point) for point in hole], fill=0)

    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    glow_alpha = mask.filter(ImageFilter.GaussianBlur(34))
    glow = Image.new("RGBA", (width, height), (10, 101, 255, 90))
    glow.putalpha(glow_alpha.point(lambda value: int(value * 0.48)))
    canvas.alpha_composite(glow)

    fill = Image.new("RGBA", (width, height), (10, 59, 139, 235))
    fill.putalpha(mask.point(lambda value: int(value * 0.84)))
    canvas.alpha_composite(fill)

    outline = ImageDraw.Draw(canvas)
    for polygon in groups:
        outline.line(
            [project(point) for point in polygon[0]],
            fill=(57, 185, 255, 255),
            width=5,
            joint="curve",
        )

    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destination, optimize=True)


if __name__ == "__main__":
    main()
