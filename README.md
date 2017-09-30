# Nexmo Plugin for Converse AI

A Nexmo plugin for [Converse AI](https://converse.ai).

The plugin presently supports:

* Sending an SMS Message
* Send a Verify PIN code
* Check a Verify PIN code

## Installation

Clone the Nexmo plugin

```bash
git clone git@github.com:Nexmo/nexmo-converseai.git
cd nexmo-converseai
```

Create a `.env` file by copying the existing `example.env`:

```bash
cp example.env .env
```

Fill out the configuration values. In order to do this you will need a [Nexmo](https://nexmo.com) account and you may also need to buy a phone number from Nexmo via the Nexmo dashboard.

Deploy the plugin to your Converse AI account:

```bash
converse-cli deploy
```

## Development

See the Converse AI documentation on [plugin development](https://get.converse.ai/docs/plugin-development).

### Configuration for Testing

Create a `.env` file by copying the existing `example.env`:

```bash
cp example.env .env
```

Fill out the configuration values.

### Running Tests

Run the test and have your phone standing by.

```bash
npm test
```

Tests are run via `test/modules/all.js` to ensure the sequence of the tests.

Some of the tests are commented out since test are run upon deployment of the Nexmo plugin (via running `converse-cli deploy`) but the test reply on collecting data from the terminal and you cannot do that during the deployment process.

## License

[MIT](LICENSE)