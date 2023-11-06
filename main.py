from types import BuiltinFunctionType
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('test.html')


@app.route('/hi')
def hi():
    return render_template('thisthing.html')


@app.route('/beep')
def beep():
    return """
     <script>
   
      alert('BEEP');
     
    """

###ignore

app.run(host='0.0.0.0', port=81)
