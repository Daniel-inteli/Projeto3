#include "WiFi.h"
using namespace std;
const char * ssid = "InteliID";
const char * pass = "12345678";
void setup()
{
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    // WiFi.begin(ssid,pass);
    delay(100);

    Serial.println("Setup done");
}

void loop()
{
    Serial.println("scan start");
    
    // WiFi.scanNetworks will return the number of networks found
    int n = WiFi.scanNetworks();
    String stringOne = WiFi.SSID();
    Serial.println("scan done");
    if (n == 0) {
        Serial.println("no networks found");
    } else {
        Serial.print(n);
        Serial.println(" networks found");

          // for (int i = 0; stringOne.startsWith("Finders") != true; ++i) {
          //   String stringOne = WiFi.SSID(i);
            if (stringOne.startsWith("Finders") != true){
            // Print SSID and RSSI for each network found
              
              String local = WiFi.SSID(0);
              Serial.println(local);
        }
        delay(100);

    }
    
    // Wait a bit before scanning again
    delay(5000);
}
