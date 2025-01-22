
# HarunBulbull Bank BIN API
Github: https://github.com/HarunBulbull/hb-bankapi

This is a simple bin checker for banks in Turkey.

#### Import
 ```
  npm i hb-bank-api
  ```
  ```
  import { getBankData } from 'hb-bank-api' //React.js
  const { getBankData } = require('hb-bank-api') //Node.js 
  ```
#
#### Success Sample:
  ```
  await getBankData(554960) // String or number
  ```
  Output:
   ```
  {
    success: true,
    bin: 554960,
    code: 62,
    bank: "GARANTİ BANKASI A.Ş."
  }
  ```
#
#### Fail Sample:
   ```
  await getBankData(1542) // String or number
  ```
  Output:
   ```
  {
    success: false,
    error: "No data found!",
    bin: "1542",
    index: -1
  }
  ```
#
#### API Works:
  Base url: https://bankapi.harunbulbul.com
  ```http
  GET /:bin_code
  ```
#
#### Supported Banks:
- T.C. ZİRAAT BANKASI A.Ş.
- HALK BANKASI A.Ş.
- VAKIFLAR BANKASI T.A.O.
- TÜRK EKONOMİ BANKASI A.Ş.
- AKBANK T.A.Ş.
- ŞEKERBANK T.A.Ş.
- GARANTİ BANKASI A.Ş.
- İŞ BANKASI A.Ş.
- YAPI ve KREDİ BANKASI A.Ş.
- FORTIS BANK A.Ş.
- CITIBANK A.Ş.
- TURKISH BANK A.Ş.
- ING BANK A.Ş.
- MILLENNIUM BANK A.Ş.
- TURKLAND BANK A.Ş.
- HSBC BANK A.Ş.
- EUROBANK TEKFEN A.Ş.
- DENİZBANK A.Ş.
- ANADOLUBANK A.Ş.
- ALBARAKA TÜRK KATILIM BANKASI A.Ş.
- KUVEYT TÜRK KATILIM BANKASI A.Ş.
- TÜRKİYE FİNANS KATILIM BANKASI A.Ş.
- ASYA KATILIM BANKASI A.Ş.
- PROVUS BİLİŞİM
- FIBABANKA A.Ş.
- TEKSTİL BANKASI A.Ş.
- ICBC TURKEY BANK A.Ş.
- QNB FİNANSBANK A.Ş.
- ALTERNATİF BANK A.Ş.
- BURGAN BANK A.Ş.
- AKTİF YATIRIM BANKASI A.Ş.
- ODEA BANK A.Ş.
- PAPARA ELEKTRONİK PARA VE ÖDEME HİZMETLERİ A.Ş.
- VAKIF KATILIM BANKASI A.Ş.
- İNİNAL ÖDEME VE ELEKTRONİK PARA HİZMETLERİ A.Ş.
- PALADYUM ELEKTRONİK PARA VE ÖDEME HİZMETLERİ A.Ş.
- ZİRAAT KATILIM BANKASI A.Ş.
- TÜRK ELEKRONİK PARA A.Ş.
- TURKCELL ÖDEME VE ELEKTRONİK PARA HİZMETLERİ A.Ş.
- POSTA VE TELGRAF TEŞKİLATI ANONİM ŞİRKETİ

  