import os
from PIL import Image
import json

def get_image_creation_date(image_path):
    return os.path.getctime(image_path)

def update_json_file(json_path, creation_date):
    try:
        with open(json_path, 'r') as json_file:
            data = json.load(json_file)
    except FileNotFoundError:
        data = {}

    # Update or add creation date to metadata
    data["creation_date"] = creation_date

    with open(json_path, 'w') as json_file:
        json.dump(data, json_file, indent=2)

def process_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith('.jpg'):
            image_path = os.path.join(directory, filename)
            json_path = os.path.splitext(image_path)[0] + '.json'

            creation_date = get_image_creation_date(image_path)
            update_json_file(json_path, creation_date)

if __name__ == "__main__":
    images_directory = "./"  # Change this to your actual images directory
    process_images(images_directory)

