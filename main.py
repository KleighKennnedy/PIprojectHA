from types import BuiltinFunctionType
from flask import Flask, render_template
import RPi.GPIO as GPIO

app = Flask(__name__)

# Set up GPIO
button_pin = 33  # Replace with the GPIO pin your button is connected to
GPIO.setmode(GPIO.BCM)
GPIO.setup(button_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

@app.route('/')
def index():
    return render_template('test.html')


@app.route('/button_state')
def button_state():
    return str(GPIO.input(button_pin))


@app.route('/beep')
def beep():
    return """
     <script>
   
      alert('BEEP');
     
    """

###ignore

app.run(host='0.0.0.0', port=81)
