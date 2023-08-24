const words =
`||COMPBIO (C) 1991 Motherboard, Inc.||
BIOS Date 01/24/92 15:43:029 Ver:  00.00.15||
CPU: Intel (R) CPU 330 @ 40 MHz|
Speed:  40 MHz||
This VGA/PCI Bios is released under the GNU LGPL||
|
Memory Clock:  64MHz, Tcl:7 Trcd:4 Trp:8 Tras:20 (2T Timing) 8 bit||
Memory Test:  128420K || OK|

||PMU ROM Version:  9303|
|NVMM ROM Version:  4.092.88|
Initalizing USB Controllers|.|. ||Done.
||128MB |OK||
USB Device(s):  1 Keyboard|||, 1 Mouse||, 1 Hub|, 1 Storge Device|
Auto-detecting USB Mass Storge Devices|.|.||
Device #01:  USB 2.0 FlashDisk *Speed*||
01 USB mass storge devices found and configured||
(C) Motherboard, Inc.|
64-0100-00001-001011111-092909-79297-1AE0V003-Y2UC|
Booting from Hard Disk|.|||.||.||`;

    const outputElement = document.getElementById('output');
    
    let i = 0;


    function typeNextChar() {
      if (i < words.length) {
        const char = words.charAt(i);
        console.log(i)
        if (char === '|') {
          setTimeout(typeNextChar, 200); // Sleep for 200ms (0.2 seconds)
        } else {
          setTimeout(typeNextChar, 10); // Normal speed for other characters
          outputElement.textContent += char;
        }

        i++;
      }
      if (i == 707){
        goToTerminal()
      }
     
    }
    typeNextChar();
    
    function goToTerminal(){
      const url = "portfolyo/html/terminal.html"
      document.location.href = url;
    }
