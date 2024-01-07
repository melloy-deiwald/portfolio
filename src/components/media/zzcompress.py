from PIL import Image
import os

def compress_image(input_path, output_path, target_size_kb):
    img = Image.open(input_path)
    quality = 85  # Initial quality value

    while True:
        img.save(output_path, quality=quality, optimize=True)
        compressed_size = os.path.getsize(output_path)
        
        if compressed_size <= target_size_kb * 1024:
            break

        quality -= 5  # Adjust quality for the next iteration

    img.close()

def process_images(folder_path, target_size_kb=795):
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg"):
            input_path = os.path.join(folder_path, filename)
            output_path = os.path.join(folder_path, "compressed_" + filename)

            # Check if the image is larger than the target size
            if os.path.getsize(input_path) > target_size_kb * 1024:
                print(f"Compressing {filename}...")
                compress_image(input_path, output_path, target_size_kb)
                os.remove(input_path)
                os.rename(output_path, input_path)
                print(f"{filename} compressed successfully.")
            else:
                print(f"{filename} is already below {target_size_kb} KB.")

if __name__ == "__main__":
    folder_path = "./"  # Replace with your folder path
    process_images(folder_path)
