# LIS Test Tool

A simple testing utility for testing LIS orders sent from an EMR. The tool is supposed to send a 200 status report if the message is delivered successfully and 400 bad request if there are errors in the payload.

The tool authenticates API requests via basic auth which is implemented using `express-basic-auth` library.

## License

MIT

## Author

Kizito S.M.

MMXXIII
