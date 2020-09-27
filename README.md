## JS Class for Odia Keyboard (Phonetic input)

This package exports a class `OdiaKeyboardDriver`. The class can be used to add odia phonetic input capability 
to HTML `<textarea>` and `<input type="text">` elements.

### install

```
    npm i -S odia-keyboard
```

### Example

```html
    <textarea id="example"></textarea>

    <script src="https://unpkg.com/odia-keyboard@1.0.1/dist/odia-keyboard.min.js"></script>
    <script type="text/javascript">
      var handle = window.OdiaKeyboardDriver(document.getElementById('example'));
    </script>
```

### Usage
**Character**|** Key Combination**|** Alternatives**
:-----:|:-----:|:-----:
ଅ| a| 
ଆ| A| aa
ଇ| i| 
ଈ| I| ee
ଉ| u| 
ଊ| U| oo
ଋ| R| 
ୠ| RU| 
ଌ| O| 
ଏ| e| 
ଐ| ai| 
ଓ| o| 
ଔ| au| 
 | | 
ଂ| M| 
ଃ| :| 
ଁ| ^| 
 | | 
କ| ka| 
ଖ| kha| 
ଗ| ga| 
ଘ| gha| 
ଙ| NGa| 
 | | 
ଚ| ca| cha
ଛ| Ca| Cha
ଜ| ja| 
ଝ| jha| Za
ଞ| NYa| 
 | | 
ଟ| Ta| 
ଠ| Tha| 
ଡ| Da| 
ଢ| Dha| 
ଡ଼| DDa| 
ଢ଼| DHa| 
ଣ| Na| 
 | | 
ତ| ta| 
ଥ| tha| 
ଦ| da| 
ଧ| dha| 
ନ| na| 
 | | 
ପ| pa| 
ଫ| pha| fa
ବ| ba| 
ଭ| bha| va
ମ| ma| 
 | | 
ଯ| ya| 
ର| ra| 
ଳ| La| 
ଵ| wa| 
ୱ| Wa| 
ଶ| sha| 
ଷ| Sa| Sha
ସ| sa| 
ହ| ha| 
କ୍ଷ| xa| kSa  kSha
ୟ| Ya| 
ଲ| La| 
ଜ୍ଞ| Jna| 


**Character**|** Key Combination**|** Alternatives**
:-----:|:-----:|:-----:
ଙ୍କ = ଙ + କ| NGka| NG`ka
ଙ୍ଖ = ଙ + ଖ| NGkha| NG`kha
ଙ୍ଗ = ଙ + ଗ| NGga| NG`ga
ଙ୍ଘ = ଙ + ଘ| NGgha| NG`gha
 | | 
ଞ୍ଚ = ଞ + ଚ| NYca| NYcha,  NY\`ca, NY`cha
ଞ୍ଛ = ଞ + ଛ| NYCa| NYCha, NY\`Ca, NY`Cha
ଞ୍ଜ = ଞ + ଜ| NYja| NY`ja
ଞ୍ଝ = ଞ + ଝ| NYjha| NYza, NY\`jha, NY`za
 | | 
ଣ୍ଟ = ଣ + ଟ| NTa| N`Ta
ଣ୍ଠ = ଣ + ଠ| NTha| N`Tha
ଣ୍ଡ = ଣ + ଡ| NDa| N`Da
ଣ୍ଢ = ଣ + ଢ| NDha| N`Dha
 | | 
ନ୍ତ = ନ + ତ| nta| n`ta
ନ୍ଥ = ନ + ଥ| ntha| n`tha
ନ୍ଦ = ନ + ଦ| nda| n`da
ନ୍ଧ = ନ + ଧ| ndha| n`dha
 | | 
ମ୍ପ = ମ + ପ| mpa| m`pa
ମ୍ଫ = ମ + ଫ| mfa| mpha, m\`fa, m`pha
ମ୍ବ = ମ + ବ| mba| m`ba
ମ୍ଭ = ମ + ଭ| mva| mbha, m\`va, m`bha
 | | 
ଧ୍ୟ = ଧ + ୟ| DhYa| Dh`Ya
ଷ୍ଣ = ଷ + ଣ| SNa| ShNa, S\`Na, Sh`Na
ର୍କ = ର + କ| rka| r`ka
କ୍ର = କ + ର| kra| k`ra
କ୍ବ = କ + ଵ| kba| kwa, kWa, k\`ba, k\`wa, k`Wa
କ୍ୟ = କ + ୟ| kYa| k`Ya
ତ୍ମ = ତ + ମ| tma| t`ma
ତ୍ତ = ତ + ତ| tta| t`ta
କ୍ତ = କ + ତ| kta| k`ta
ତ୍ସ = ତ + ସ| tsa| t`sa
ନ୍ତ୍ର = ନ + ତ + ର| ntra| n\`t`ra


#### Examples

**Word**|**Key combination**
:-----:|:-----:
ପ୍ରତ୍ନତତ୍ତ୍ବ| pratnatattwa
ସ୍ବାଭିମାନ| swAvimAna
ଗଳ୍ପସ୍ଵଳ୍ପ| gaLpaswaLpa
କୃତକର୍ମ| kRtakarma
ଶୁଦ୍ରମୁନୀ  ୰ ଶାରଳା ଦାସ| shudramunI V shAraLA dAsa
ନୀଳଶୈଳ| nILashaiLa
ଜଗନ୍ନାଥ| jagannAtha
ମତ୍ସ୍ୟ| matsYa
ମଧ୍ୟଭାଗ| madhYavAga




+ Press TAB to toggle between Odia Phonetic Input and native input method of your device.
