import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return "Hello, world\n"


app.run(host="localhost", port=3000)
