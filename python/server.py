import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return "(Python) Hello, world\n"


app.run(host="localhost", port=8080)
