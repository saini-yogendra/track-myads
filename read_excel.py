import pandas as pd
import json
import sys

try:
    df = pd.read_excel('trackmyads.xlsx')
    # Replace NaN with None or empty string for better JSON handling
    df = df.where(pd.notnull(df), None)
    
    # Convert to list of dicts
    data = df.to_dict(orient='records')
    
    # Write to file
    with open('trackmyads.json', 'w') as f:
        json.dump(data, f, indent=2)
    print("Successfully wrote trackmyads.json")
except Exception as e:
    print(f"Error reading excel file: {e}", file=sys.stderr)
