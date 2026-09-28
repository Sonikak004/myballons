import os
import glob
import re

def strip_animations():
    files = glob.glob("src/components/*.tsx")
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original_content = content
        
        # Regex for prop={{...}} or prop={...}
        # Matches 'prop={' followed by anything up to '}}' or '}' non-greedily, but we must be careful.
        # Since these are usually formatted predictably, we can just replace the exact strings.
        
        # Let's just use regex with re.DOTALL to match from 'initial={{' to '}}'
        content = re.sub(r'initial=\{\{.*?\}\}', '', content, flags=re.DOTALL)
        content = re.sub(r'whileInView=\{\{.*?\}\}', '', content, flags=re.DOTALL)
        content = re.sub(r'viewport=\{\{.*?\}\}', '', content, flags=re.DOTALL)
        content = re.sub(r'transition=\{\{.*?\}\}', '', content, flags=re.DOTALL)
        
        # Also catch single braces just in case like initial={false}
        content = re.sub(r'initial=\{.*?\}', '', content, flags=re.DOTALL)
        
        if content != original_content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Stripped animations from {file}")

if __name__ == "__main__":
    strip_animations()
