import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return "(Python) Hello, world\n"


app.run(host="0.0.0.0", port=8080)
