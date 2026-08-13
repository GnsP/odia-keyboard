# Odia Phonetic Keyboard Manual

Welcome to the comprehensive guide for the Odia Phonetic Keyboard module. This keyboard driver allows you to type Odia text easily by spelling words phonetically using the English alphabet. 

By default, typing an English consonant produces its Odia equivalent with an implicit 'a' (ଅ) sound. You can form words by typing them exactly as they sound.

---

## 1. Toggling the Keyboard

If the keyboard driver is attached to an input element, you can easily switch between Odia phonetic typing and your device's native English input by pressing the **`TAB`** key.

---

## 2. Vowels (ସ୍ୱରବର୍ଣ୍ଣ) & Matras (ମାତ୍ରା)

Vowels in Odia can exist independently (at the beginning of a word) or as vowel signs (Matras) attached to consonants. The phonetic keyboard automatically handles this: if you type a vowel directly after a consonant, it attaches as a Matra. If typed independently, it appears as a full vowel.

| Vowel | Matra | Key Combination | Alternative | Example (Independent) | Example (with 'k' = କ) |
| :---: | :---: | :---: | :---: | :--- | :--- |
| ଅ | (none) | `a` | | ଅଜ (`aja`) | କ (`ka`) |
| ଆ | ା | `A` | `aa` | ଆମ (`Ama` / `aama`) | କା (`kA` / `kaa`) |
| ଇ | ି | `i` | | ଇଟା (`iTA`) | କି (`ki`) |
| ଈ | ୀ | `I` | `ee` | ଈଶ୍ଵର (`Ishwara`) | କୀ (`kI` / `kee`) |
| ଉ | ୁ | `u` | | ଉପର (`upara`) | କୁ (`ku`) |
| ଊ | ୂ | `U` | `oo` | ଊଣା (`UNA`) | କୂ (`kU` / `koo`) |
| ଋ | ୃ | `R` | | ଋଷି (`RSi`) | କୃ (`kR`) |
| ୠ | ୄ | `RU` | | ୠ | ୄ (`kRU`) - *rarely used* |
| ଌ | ୢ | `O` | | ଌ | ୢ (`kO`) - *rarely used* |
| ଏ | େ | `e` | | ଏକ (`eka`) | କେ (`ke`) |
| ଐ | ୈ | `ai`| | ଐରାବତ (`airAbata`) | କୈ (`kai`) |
| ଓ | ୋ | `o` | | ଓଡିଶା (`oDiSAA`) | କୋ (`ko`) |
| ଔ | ୌ | `au`| | ଔଷଧ (`auSadha`) | କୌ (`kau`) |

---

## 3. Consonants (ବ୍ୟଞ୍ଜନବର୍ଣ୍ଣ)

Most consonants are mapped to their phonetic English equivalents. Note that **case matters** (e.g., `t` for ତ and `T` for ଟ).

### Ka-Barga
| Character | Key | Alternative |
| :---: | :---: | :---: |
| କ | `k` / `ka` | |
| ଖ | `kh` / `kha` | |
| ଗ | `g` / `ga` | |
| ଘ | `gh` / `gha` | |
| ଙ | `NG` / `NGa`| |

### Ca-Barga
| Character | Key | Alternative |
| :---: | :---: | :---: |
| ଚ | `c` / `ca` | `ch` / `cha` |
| ଛ | `C` / `Ca` | `Ch` / `Cha` |
| ଜ | `j` / `ja` | |
| ଝ | `jh` / `jha` | `z` / `za` |
| ଞ | `NY` / `NYa`| |

### Ta-Barga (Hard / Retroflex)
| Character | Key | Alternative |
| :---: | :---: | :---: |
| ଟ | `T` / `Ta` | |
| ଠ | `Th` / `Tha` | |
| ଡ | `D` / `Da` | |
| ଢ | `Dh` / `Dha` | |
| ଣ | `N` / `Na` | |
| ଡ଼ | `DD` / `DDa` | |
| ଢ଼ | `Dz` / `Dza` | |

### Ta-Barga (Soft / Dental)
| Character | Key | Alternative |
| :---: | :---: | :---: |
| ତ | `t` / `ta` | |
| ଥ | `th` / `tha` | |
| ଦ | `d` / `da` | |
| ଧ | `dh` / `dha` | |
| ନ | `n` / `na` | |

### Pa-Barga
| Character | Key | Alternative |
| :---: | :---: | :---: |
| ପ | `p` / `pa` | |
| ଫ | `ph` / `pha` | `f` / `fa` |
| ବ | `b` / `ba` | |
| ଭ | `bh` / `bha` | `v` / `va` |
| ମ | `m` / `ma` | |

### Others (Semivowels & Fricatives)
| Character | Key | Note |
| :---: | :---: | :--- |
| ଯ | `y` / `ya` | Ja (Soft) |
| ୟ | `Y` / `Ya` | Ya |
| ର | `r` / `ra` | Ra |
| ଲ | `l` / `la` | La (Soft) |
| ଳ | `L` / `La` | La (Hard) |
| ଵ | `w` / `wa` | Wa |
| ୱ | `W` / `Wa` | Wa (Alternative form) |
| ଶ | `sh` / `sha` | Sha (Talabya) |
| ଷ | `S` / `Sa` | Sha (Murdhanya) - Alt: `Sh`, `Sha` |
| ସ | `s` / `sa` | Sa (Dantya) |
| ହ | `h` / `ha` | Ha |
| କ୍ଷ | `x` / `xa` | Ksha - Alt: `kS`, `kSh`, `kSa`, `kSha` |
| ଜ୍ଞ | `Jna` | Jna (Special Conjunct) |

---

## 4. Special Symbols (ବିଶେଷ ଚିହ୍ନ) & Numbers (ସଂଖ୍ୟା)

| Character | Name | Key | Example |
| :---: | :--- | :---: | :--- |
| ଂ | Anuswara | `M` | `aM` ➔ ଅଂ, `hAM` ➔ ହାଂ |
| ଃ | Visarga | `:` | `du:kha` ➔ ଦୁଃଖ |
| ଁ | Chandra Bindu | `^` | `ka^` ➔ କଁ |
| ଽ | Avagraha | `E` | `heE` ➔ ହେଽ |
| ୰ | Isshar (Late) | `V` | `V` ➔ ୰ |
| ॐ | Om | `Q` | `Q` ➔ ॐ |
| ₹ | Rupee | `q` | `q50` ➔ ₹୫୦ |

### Numbers (ସଂଖ୍ୟା)
Typing regular digits `0` to `9` produces their Odia counterparts by default:
`0123456789` ➔ **୦୧୨୩୪୫୬୭୮୯**

---

## 5. Conjuncts / Half-characters (ଯୁକ୍ତାକ୍ଷର)

In Odia, when two or more consonants appear consecutively without a vowel in between, they form a conjunct (ଯୁକ୍ତାକ୍ଷର).

The phonetic keyboard is smart enough to handle this automatically: **simply type the consonants together, without typing 'a' or any other vowel in between.**

* `k` + `t` + `a` ➔ **କ୍ତ** (`kta`)
* `n` + `d` + `a` ➔ **ନ୍ଦ** (`nda`)
* `p` + `r` + `a` ➔ **ପ୍ର** (`pra`)
* `m` + `L` + `A` ➔ **ମ୍ଳା** (`mLA`)

### Exhaustive List of Specific Conjuncts
The phonetic engine is equipped with many built-in configurations for creating precise conjuncts.

| Conjunct | Breakdown | Primary Key Sequence | Alternative Keys |
| :---: | :--- | :---: | :---: |
| ଙ୍କ | ଙ + କ | `NGka` | `` NG`ka `` |
| ଙ୍ଖ | ଙ + ଖ | `NGkha` | `` NG`kha `` |
| ଙ୍ଗ | ଙ + ଗ | `NGga` | `` NG`ga `` |
| ଙ୍ଘ | ଙ + ଘ | `NGgha` | `` NG`gha `` |
| ଞ୍ଚ | ଞ + ଚ | `NYca` | `NYcha`, `` NY`ca ``, `` NY`cha `` |
| ଞ୍ଛ | ଞ + ଛ | `NYCa` | `NYCha`, `` NY`Ca ``, `` NY`Cha `` |
| ଞ୍ଜ | ଞ + ଜ | `NYja` | `` NY`ja `` |
| ଞ୍ଝ | ଞ + ଝ | `NYjha` | `NYza`, `` NY`jha ``, `` NY`za `` |
| ଣ୍ଟ | ଣ + ଟ | `NTa` | `` N`Ta `` |
| ଣ୍ଠ | ଣ + ଠ | `NTha` | `` N`Tha `` |
| ଣ୍ଡ | ଣ + ଡ | `NDa` | `` N`Da `` |
| ଣ୍ଢ | ଣ + ଢ | `NDha` | `` N`Dha `` |
| ନ୍ତ | ନ + ତ | `nta` | `` n`ta `` |
| ନ୍ଥ | ନ + ଥ | `ntha` | `` n`tha `` |
| ନ୍ଦ | ନ + ଦ | `nda` | `` n`da `` |
| ନ୍ଧ | ନ + ଧ | `ndha` | `` n`dha `` |
| ମ୍ପ | ମ + ପ | `mpa` | `` m`pa `` |
| ମ୍ଫ | ମ + ଫ | `mfa` | `mpha`, `` m`fa ``, `` m`pha `` |
| ମ୍ବ | ମ + ବ | `mba` | `` m`ba `` |
| ମ୍ଭ | ମ + ଭ | `mva` | `mbha`, `` m`va ``, `` m`bha `` |
| ଧ୍ୟ | ଧ + ୟ | `DhYa` | `` Dh`Ya `` |
| ଷ୍ଣ | ଷ + ଣ | `SNa` | `ShNa`, `` S`Na ``, `` Sh`Na `` |
| ର୍କ | ର + କ | `rka` | `` r`ka `` (Repha) |
| କ୍ର | କ + ର | `kra` | `` k`ra `` (Phalaa) |
| କ୍ବ | କ + ଵ | `kba` | `kwa`, `kWa`, `` k`ba ``, `` k`wa ``, `` k`Wa `` |
| କ୍ୟ | କ + ୟ | `kYa` | `` k`Ya `` |
| ତ୍ମ | ତ + ମ | `tma` | `` t`ma `` |
| ତ୍ତ | ତ + ତ | `tta` | `` t`ta `` |
| କ୍ତ | କ + ତ | `kta` | `` k`ta `` |
| ତ୍ସ | ତ + ସ | `tsa` | `` t`sa `` |
| ନ୍ତ୍ର | ନ + ତ + ର | `ntra` | `` n`t`ra `` |

---

## 6. Advanced: Explicit Halant & ZWNJ

Sometimes you want to add a pure Halant (Viram) without forming a conjunct, or you want to forcefully prevent two consonants from joining into a single conjunct.

### Explicit Halant (Viram) - Backtick (`)
Use the **backtick (`)** key to explicitly insert a Halant.
* **କ୍** : `k` + `` ` `` ➔ `` k` ``
* **କ୍‌କ** : `k` + `` ` `` + `k` + `a` ➔ `` k`ka ``

### Zero-Width Non-Joiner (ZWNJ) - Tilde (~)
If your environment naturally forms a conjunct but you want the letters to remain distinct (with a visible Halant), use the **tilde (~)**. This adds a Halant and a ZWNJ character.
* **କ୍‌ତ** : `k` + `~` + `t` + `a` ➔ `k~ta` 
*(Notice how it prevents standard "କ୍ତ" rendering and forces them apart).*

### Using `H` to Prevent Vowel Combinations
The **`H`** key inserts a plain ZWNJ character. This is particularly useful when you want to type two independent vowels side-by-side without them automatically combining. 
Because the keyboard's finite-state machine (FSM) is designed to combine keys like `a` + `i` into `ai` (ଐ) and `a` + `u` into `au` (ଔ), typing them in sequence will normally merge them. To type them as distinct, separate sounds like **ଅଇ** (a + i) or **ଅଉ** (a + u), you must insert `H` between them to break the combination sequence.
* **ଅଇ** : `a` + `H` + `i` ➔ `aHi`
* **ଅଉ** : `a` + `H` + `u` ➔ `aHu`
* **ଖାଇବା** : `k` `h` `A` `i` `b` `A` ➔ `khAibA` *(No `H` needed because `A` + `i` doesn't automatically form a single different vowel in the engine).*

---

## 7. Typing Examples: From Simple to Complex

Here is a step-by-step progression of typing words to help you practice and understand the engine perfectly, ending with comprehensive sentences.

### 7.1 Simple Words (Without Matras)
Just spell the word out. The implicit 'a' at the end of syllables is handled.
* **କମଳ**: `kamala`
* **ଗରମ**: `garama`
* **ଘର**: `ghara`
* **ସହର**: `sahara`

### 7.2 Words with Matras (Vowel Signs)
Use capital letters for long vowels (like `A`, `I`, `U`) or double letters (`aa`, `ee`, `oo`).
* **କାକା**: `kAkA`
* **କିତାବ**: `kitAba`
* **କୁକୁର**: `kukura`
* **କୃଷକ**: `kRSaka`
* **ଦେଶ**: `desha`
* **ମୌସୁମୀ**: `mausumI`

### 7.3 Words with Conjuncts (Juktakhara)
Type the consonants directly without typing 'a' in between them.
* **ଗଳ୍ପସ୍ଵଳ୍ପ**: `gaLpaswaLpa`
* **କୃତକର୍ମ**: `kRtakarma`
* **ମତ୍ସ୍ୟ**: `matsYa`
* **ମଧ୍ୟଭାଗ**: `madhYavAga`
* **ବିଦ୍ୟାଳୟ**: `bidYALaya`

### 7.4 Complex Words and Sentences
Combining conjuncts, matras, and special symbols into full sentences and verses.

1. **ମୁଁ ତୁମକୁ ଭଲ ପାଏ ।** ➔ `mu^ tumaku vala pAe`
2. **ଆଜି ପାଗ ବହୁତ ଭଲ ଅଛି ।** ➔ `Aji pAga bahuta vala aCi`
3. **ଜଗନ୍ନାଥ ହେଉଛନ୍ତି ବ୍ରହ୍ମାଣ୍ଡର ନାଥ ।** ➔ `jagannAtha heuCanti brahmANDara nAtha`
4. **ବିଦ୍ୟା ଦଦାତି ବିନୟମ୍ ।** ➔ `` bidYA dadAti binayam` ``
5. **ମାତୃଭୂମି ମାତୃଭାଷାରେ ମମତା ଯାହାର ଜନମି ନାହିଁ ।** ➔ `mAtRvUmi mAtRvASAre mamatA yAhAra janami nAhi^`
6. **ତାକୁ ଯଦି ଜ୍ଞାନୀ ଗଣିବା ଅଜ୍ଞାନ ରହିବେ କାହିଁ ।** ➔ `tAku yadi JnAnI gaNibA aJnAna rahibe kAhi^`
7. **ସଂସାରର ନିୟମ ଅଟେ ପରିବର୍ତ୍ତନ ।** ➔ `saMsArara niyama aTe paribarttana`
8. **କର୍ମଣ୍ୟେବାଧିକାରସ୍ତେ ମା ଫଳେଷୁ କଦାଚନ ।** ➔ `karmaNYebAdhikAraste mA faLeSu kadAcana`
9. **ସତ୍ୟମେବ ଜୟତେ ନାନୃତମ୍ ।** ➔ `` satYameba jayate nAnRtam` ``
10. **ଉତ୍କଳ ଦିବସ ଅବସରରେ ହାର୍ଦ୍ଦିକ ଶୁଭେଚ୍ଛା ।** ➔ `utkaLa dibasa abasarare hArddika shuvecCA`
11. **ସମସ୍ତଙ୍କୁ ମୋର ପ୍ରଣାମ ।** ➔ `samastaNGku mora praNAma`
12. **ଆପଣମାନେ କେମିତି ଅଛନ୍ତି ?** ➔ `ApaNamAne kemiti aCanti`
13. **ସାହିତ୍ୟ ସମାଜର ଦର୍ପଣ ଅଟେ ।** ➔ `sAhitYa samAjara darpaNa aTe`
14. **ପ୍ରକୃତିର ସୌନ୍ଦର୍ଯ୍ୟ ଅବର୍ଣ୍ଣନୀୟ ।** ➔ `prakRtira saundarjYa abarNNaNIya`
15. **ଶିକ୍ଷା ହିଁ ମଣିଷର ପ୍ରକୃତ ସମ୍ପଦ ।** ➔ `shixA hi^ maNiSara prakRta sampada`
16. **ସ୍ୱଚ୍ଛ ଭାରତ ଅଭିଯାନ ଆମର ଲକ୍ଷ୍ୟ ।** ➔ `swacCa vArata aviyAna Amara laxYa`
17. **ଦୁର୍ନୀତି ମୁକ୍ତ ସମାଜ ଗଠନ କରିବା ।** ➔ `durnIti mukta samAja gaThana karibA`
18. **ପ୍ରାଚୀନ ଓଡ଼ିଆ ସାହିତ୍ୟ ଖୁବ୍ ସମୃଦ୍ଧ ।** ➔ `` prAcIna oDiA sAhitYa khub` samRddha ``
19. **ବିଜ୍ଞାନ ଓ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଆମ ଜୀବନକୁ ସହଜ କରିଛି ।** ➔ `biJnAna o prayuktibidYA Ama jIbanaku sahaja kariCi`
20. **ବନ୍ଦେ ଉତ୍କଳ ଜନନୀ ଚାରୁ ହାସମୟୀ ଚାରୁ ଭାଷମୟୀ ।** ➔ `bande utkaLa jananI cAru hAsamayI cAru vASamayI`
