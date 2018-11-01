/* user.js file for Firefox

*/


// Enable U2F so that U2F 2FA devices can be used
user_pref("security.webauth.u2f", true);


// Explicitly Disable TRR. DoH bypasses local DNS based ad filtering, content filtering etc
user_pref("network.trr.mode", 5);


// Configure remote DNS when a SOCKs proxy is enabled
user_pref("network.proxy.socks_remote_dns", true);

// Allow first party cookies only
user_pref("network.cookie.cookieBehavior", 1);


// Don't want pocket, screenshotting service or any other crap thanks. It's a browser
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.pocket.enabled", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.auth.uri", '');


// No teletry, healthreports etc
user_pref("datareporting.healthreport.service.enabled", false); 
user_pref("datareporting.healthreport.uploadEnabled", false); 
user_pref("datareporting.policy.dataSubmissionEnabled", false); 
user_pref("toolkit.telemetry.unified", false); 
