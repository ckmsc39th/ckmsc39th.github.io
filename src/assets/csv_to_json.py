import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV file
    with open(csv_file_path, 'r') as csv_file:
        # Assuming the CSV file has a header
        reader = csv.DictReader(csv_file)
        # Convert each row into a dictionary and store them in a list
        rows = list(reader)

    # Write the JSON file
    with open(json_file_path, 'w') as json_file:
        # Use the json library to convert the list of dictionaries to JSON format
        json.dump(rows, json_file, indent=4)

csv_file_path = 'input.csv'
json_file_path = 'output.json'
csv_to_json(csv_file_path, json_file_path)
