# author: Bayu Aditya
import os
from flask import Flask, render_template

STATICS_DIR = os.path.abspath("frontend/statics")
TEMPLATES_DIR = os.path.abspath("frontend/templates")

app = Flask(__name__, template_folder=TEMPLATES_DIR, static_folder=STATICS_DIR)

# GET homepage /
@app.route("/")
def homepage():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
