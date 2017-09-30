// The purpose of this file is to run the API tests in sequence
require('./module-send_sms-test');
require('./module-send_verify_pin_code-test');
// Console output is not shown during `converse-cli deploy` so this test can only be run manually.
//require('./module-check_verify_pin_code-test');