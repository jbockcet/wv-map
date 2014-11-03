$(document).ready(function(){
	
	var paper = new Raphael(document.getElementById('west-virginia'), 700, 600);  //Creates a canvas and instantiates the Raphael object
	
	//Array to hold each county
	var wv = []; 
	var label = [];
	
	//Attributes of each county. These need to be set before any animation can register
	var attr = {				 
            fill: "#FFF",
            stroke: "#666",
            text: "county",
            "stroke-width": 1,
            "stroke-linejoin": "round",
           	"stroke-width" : "2px",
    };
	var font = {
			"font-size": "9px",
			"font-family" : "Verdana, Arial, Helvetica, sans-serif",
						
	};
		
	
	//Begin drawing counties as paths of an SVG
		
 	wv.wood = paper.path("M 157.763,203.091 157.685,199.515 150.219,185.365 136.148,196.407   136.46,210.713 122.077,207.448 111.582,218.412 111.972,236.293 133.665,246.555 151.157,228.282 165.384,224.394 172.224,209.932   157.763,203.091z").attr(attr).data("county", "Wood");
	label.woodLabel = paper.text(140, 220, 'Wood').attr(font);
 	
 	wv.mon = paper.path("M 275.299,139.957 352.85,138.298 349.835,156.464 339.389,178.026 339.44,188.472   332.387,185.351 306.493,157.083 285.278,157.822 279.298,154.138, 275.299,139.957z").attr(attr).data("county", "Monongalia");
	label.monLabel = paper.text(315, 148, 'Monongalia').attr(font);
 	
 	wv.jefferson = paper.path("M 589.04,171.189 585.621,178.42 564.786,207.5 590.289,228.412 600.393,199.566   600.16,188.837 592.772,178.264 592.617,171.111 589.04,171.189z").attr(attr).data("county", "Jefferson");
	label.jerffersonLabel = paper.text(625, 200, 'Jefferson').attr(font);
	
	wv.hancock = paper.path("M 260.685,0.471 250.034,4.281 242.958,8.014 254.079,25.662 250.736,36.469   261.465,36.235 260.685,0.471z").attr(attr).data("county", "Hancock");
	label.hancock = paper.text(220, 25, 'Hancock').attr(font);
	
	wv.brooke = paper.path("M 250.736,36.469 251.126,54.351 244.286,68.813 262.246,71.999 261.465,36.235   250.736,36.469z").attr(attr).data("county", "Brooke");
	label.brookeLabel = paper.text(225, 55, 'Brooke').attr(font);
	
	wv.ohio = paper.path("M 244.286,68.813 237.679,94.004 262.792,97.034 262.246,71.999 244.286,68.813z").attr(attr).data("county", "Ohio");
	label.ohioLabel = paper.text(224, 80, 'Ohio').attr(font);
	
	wv.marshall = paper.path("M 237.679,94.004 227.34,112.12 220.734,137.311 224.388,140.809 263.729,139.951   262.792,97.034 237.679,94.004z").attr(attr).data("county", "Marshall");
	label.MarshallLabel = paper.text(244, 125, 'Marshall').attr(font);
	
	wv.wetzel = paper.path("M 224.388,140.809 221.124,155.193 210.472,159.003 224.934,165.844   239.552,179.838 250.359,183.18 261.167,186.522 264.587,179.292 264.147,168.625 278.814,154.292 274.458,139.717 224.388,140.809z").attr(attr).data("county", "Wetzel");
	label.wetzelLabel = paper.text(245, 160, 'Wetzel').attr(font);
	
	wv.tyler = paper.path("M 210.472,159.003 189.482,180.93 200.211,180.696 200.68,202.155 207.833,201.999   214.83,194.689 218.484,198.188 218.64,205.341 236.288,194.221 236.131,187.068 243.285,186.913 250.359,183.18 239.552,179.838   224.934,165.844 210.472,159.003z").attr(attr).data("county", "Tyler");
	label.tylerLabel = paper.text(215, 180, 'Tyler').attr(font);
	
	wv.pleasants = paper.path("M 189.482,180.93 157.685,199.515 157.763,203.091 172.224,209.932 200.68,202.155   200.211,180.696 193.059,180.853 189.482,180.93z").attr(attr).data("county", "Pleasants");
	label.pleasantsLabel = paper.text(160, 175, 'Pleasants').attr(font);
	
	wv.preston = paper.path("M 353.139,138 349.953,155.96 339.691,177.652 340.315,206.264 347.703,216.837   365.506,212.87 390.776,223.053 388.902,137.219 353.139,138z").attr(attr).data("county", "Preston");
	label.prestonLabel = paper.text(365, 185, 'Preston').attr(font);
	
	wv.tucker = paper.path("M 347.703,216.837 348.171,238.295 355.402,241.716 351.981,248.946   387.98,258.896 405.862,258.505 412.703,244.043 405.472,240.623 412.234,222.585 408.58,219.086 394.43,226.551 390.776,223.053   365.506,212.87 347.703,216.837z").attr(attr).data("county", "Tucker");
	label.tuckerLabel = paper.text(375, 238, 'Tucker').attr(font);
	
	wv.mineral = paper.path("M 415.178,201.32 433.138,204.505 451.254,214.844   489.659,171.069 474.962,153.5 450.552,182.657 439.745,179.314, 415.178,201.32z").attr(attr).data("county", "Mineral");
	label.mineralLabel = paper.text(450, 190, 'Mineral').attr(font);
	
	wv.hampshire = paper.path("M 489.823,170.798 451.418,214.573 458.727,221.57 494.726,231.52 509.187,238.359   519.605,223.82 519.448,216.667 526.132,195.053 525.743,177.17 511.281,170.33 489.823,170.798z").attr(attr).data("county", "Hampshire");
	label.hampshireLabel = paper.text(490, 210, 'Hampshire').attr(font);
	
	wv.morgan = paper.path("M 511.281,170.33 525.743,177.17 540.361,191.164 553.963,158.664 564.615,154.854   557.306,147.857 542.922,144.592 532.427,155.556 525.197,152.136 511.281,170.33z").attr(attr).data("county", "Morgan");
	label.morganLabel = paper.text(534, 165, 'Morgan').attr(font);
	
	wv.berkeley = paper.path("M 540.125,191.191 553.727,158.691 563.787,155 574.359,158.06 585.836,154.412   585.915,157.988 582.417,161.643 589.104,171.97 586.384,179.447 565.457,207.861, 540.125,191.191z").attr(attr).data("county", "Berkeley");
	label.berkeleyLabel = paper.text(600, 148, 'Berkeley').attr(font);
	
	wv.marion = paper.path("M 332.695,184.961 306.814,156.625 285.577,157.365 278.814,154.292   264.147,168.625 264.814,179.292 300.147,192.625 311.314,189.006 313.98,192.542 332.695,184.961z").attr(attr).data("county", "Marion");;
	label.marionLabel = paper.text(293, 175, 'Marion').attr(font);
	
	wv.doddridge = paper.path("M 250.359,183.18 243.285,186.913 236.131,187.068 236.288,194.221 218.64,205.341   215.142,208.996 226.496,237.373 237.302,240.715 251.374,229.674 261.947,222.286 254.482,208.137 261.479,200.828   261.167,186.522 250.359,183.18z").attr(attr).data("county", "Doddridge");
	label.doddridgeLabel = paper.text(237, 213, 'Doddridge').attr("font-size", "8px");
	
	wv.harrison = paper.path("M 264.587,179.292 261.167,186.522 261.479,200.828 254.482,208.137   261.947,222.286 251.374,229.674 290.949,239.544 298.023,235.812 297.789,225.082 304.786,217.773 301.053,210.699   300.664,192.816 291.48,189.292 264.587,179.292z").attr(attr).data("county", "Harrison");
	label.harrisonLabel = paper.text(280, 210, 'Harrison').attr(font);
	
	wv.taylor = paper.path("M 300.664,192.816 301.053,210.699 304.786,217.773 326.244,217.305   340.315,206.264 339.925,188.382 332.695,184.961 313.98,192.542 311.314,189.006 300.664,192.816z").attr(attr).data("county", "Taylor");
	label.taylorLabel = paper.text(320, 205, 'Taylor').attr(font);
	
	wv.ritchie = paper.path("M 200.68,202.155 172.224,209.932 165.384,224.394 169.429,245.773   180.236,249.116 187.311,245.384 198.196,252.303 226.496,237.373 215.142,208.996 218.64,205.341 218.484,198.188 214.83,194.689   207.833,201.999 200.68,202.155z").attr(attr).data("county", "Ritchie");
	label.ritchieLabel = paper.text(195, 227, 'Ritchie').attr(font);
	
	wv.wirt = paper.path("M 165.384,224.394 169.429,245.773 180.236,249.116 166.321,267.311   159.167,267.467 148.283,260.548 141.208,264.28 137.475,257.205 140.895,249.975 133.665,246.555 151.157,228.282 165.384,224.394z").attr(attr).data("county", "Wirt");
	label.wirtLabel = paper.text(155, 247, 'Wirt').attr(font);
	
	wv.jackson = paper.path("M 111.972,236.293 104.819,236.449 108.942,261.406 94.792,268.871   106.068,293.673 102.57,297.327 109.878,304.323 113.376,300.669 117.109,307.743 124.575,321.894 138.724,314.429 134.914,303.777   137.709,267.936 141.208,264.28 137.475,257.205 140.895,249.975 133.665,246.555 111.972,236.293z").attr(attr).data("county", "Jackson");
	label.jacksonLabel = paper.text(117, 275, 'Jackson');
	
	wv.roane = paper.path("M 141.208,264.28 137.709,267.936 134.914,303.777 138.724,314.429   146.111,325.001 178.376,327.875 192.37,313.258 181.563,309.915 173.864,285.036 166.321,267.311 159.167,267.467 148.283,260.548   141.208,264.28z").attr(attr).data("county", "Roane");
	label.roaneLabel = paper.text(155, 300, 'Roane').attr(font);
	
	wv.calhoun = paper.path("M 180.236,249.116 166.321,267.311 173.864,285.036 181.563,309.915   192.37,313.258 199.367,305.949 202.787,298.718 195.322,284.568 202.397,280.836 198.196,252.303 187.311,245.384 180.236,249.116z").attr(attr).data("county", "Calhoun");
	label.calhounLabel = paper.text(185, 275, 'Calhoun').attr("font-size", "8px");
	
	wv.gilmer = paper.path("M 226.496,237.373 198.196,252.303 202.397,280.836 195.322,284.568   202.787,298.718 252.233,269.014 237.537,251.444 237.302,240.715 226.496,237.373z").attr(attr).data("county", "Gilmer");
	label.gilmerLabel = paper.text(222, 265, 'Gilmer').attr(font);
	
	wv.lewis = paper.path("M 251.374,229.674 237.302,240.715 237.537,251.444 252.233,269.014   255.965,276.089 266.772,279.432 270.661,293.659 277.892,297.079 277.736,289.926 287.84,261.08 290.949,239.544 251.374,229.674z").attr(attr).data("county", "Lewis");
	label.lewisLabel = paper.text(265, 255, 'Lewis').attr(font);
	
	wv.upshur = paper.path("M 298.023,235.812 290.949,239.544 287.84,261.08 277.736,289.926 277.892,297.079   285.044,296.923 292.353,303.92 299.272,293.034 313.578,292.722 316.841,278.338 313.109,271.264 320.106,263.955 319.794,249.648   309.064,249.883 298.023,235.812z").attr(attr).data("county", "Upshur");
	label.upshurLabel = paper.text(298, 275, 'Upshur').attr("font-size", "8px");
	
	wv.barbour = paper.path("M 304.786,217.773 297.789,225.082 298.023,235.812 309.064,249.883   319.794,249.648 320.106,263.955 341.486,259.91 348.171,238.295 347.703,216.837 340.315,206.264 326.244,217.305 304.786,217.773z").attr(attr).data("county", "Barbour");
	label.barbourLabel = paper.text(325, 235, 'Barbour').attr(font);
	
	wv.randolph = paper.path("M 320.106,263.955 313.109,271.264 316.841,278.338 313.578,292.722   299.272,293.034 292.353,303.92 303.628,328.721 293.368,350.413 310.937,335.717 325.322,338.981 346.468,324.207 352.917,291.864   371.113,305.779 388.604,287.507 384.638,269.703 405.862,258.505 387.98,258.896 351.981,248.946 355.402,241.716 348.171,238.295   341.486,259.91 320.106,263.955z").attr(attr).data("county", "Randolph");
	label.randolphLabel = paper.text(345, 283, 'Randolph').attr(font);
	
	wv.pendleton = paper.path("M 405.862,258.505 391.712,265.971 384.638,269.703 388.604,287.507   371.113,305.779 371.347,316.508 385.808,323.349 393.273,337.498 411.312,344.261 418.308,336.952 442.329,289.913   435.019,282.915 405.862,258.505z").attr(attr).data("county", "Pendleton");
	label.pendletonLabel = paper.text(408, 300, 'Pendleton').attr(font);
	
	wv.hardy = paper.path("M 451.418,214.573 437.738,243.497 445.281,261.223 435.019,282.915   442.329,289.913 449.168,275.451 463.787,289.444 477.703,271.25 498.848,256.476 509.187,238.359 494.726,231.52 458.727,221.57   451.418,214.573z").attr(attr).data("county", "Hardy");
	label.hardyLabel = paper.text(470, 255, 'Hardy').attr(font);
	
	wv.pocahontas = paper.path("M 352.917,291.864 346.468,324.207 325.322,338.981 310.937,335.717   293.368,350.413 282.794,357.8 283.576,393.563 294.539,404.059 315.919,400.015 333.801,399.624 336.988,381.664 350.98,367.046   364.662,338.123 371.347,316.508 371.113,305.779 352.917,291.864z").attr(attr).data("county", "Pocahontas");
	label.pocahontasLabel = paper.text(315, 368, 'Pocahontas').attr(font);
	
	wv.webster = paper.path("M 246.329,326.393 242.908,333.624 246.718,344.274 250.451,351.35   272.299,368.763 283.185,375.682 282.794,357.8 293.368,350.413 303.628,328.721 292.353,303.92 285.044,296.923 277.892,297.079   270.661,293.659 263.82,308.12 246.329,326.393z").attr(attr).data("county", "Webster");
	label.websterLabel = paper.text(275, 330, 'Webster').attr(font);
	
	wv.braxton = paper.path("M 202.787,298.718 199.367,305.949 217.795,330.593 228.369,323.206   235.677,330.203 246.329,326.393 263.82,308.12 270.661,293.659 266.772,279.432 255.965,276.089 252.233,269.014 202.787,298.718z").attr(attr).data("county", "Braxton");
	label.braxtonLabel = paper.text(235, 305, 'Braxton').attr(font);
	
	wv.nicholas = paper.path("M 228.369,323.206 217.795,330.593 225.026,334.014 214.531,344.978   175.659,367.294 179.391,374.368 197.351,377.555 208.002,373.745 211.891,387.972 219.2,394.969 240.659,394.5 272.299,368.763   250.451,351.35 246.718,344.274 242.908,333.624 246.329,326.393 235.677,330.203 228.369,323.206z").attr(attr).data("county", "Nicholas");;
	label.nicholasLabel = paper.text(230, 365, 'Nicholas').attr(font);
	
	wv.clay = paper.path("M 199.367,305.949 192.37,313.258 178.376,327.875 167.803,335.263   175.659,367.294 214.531,344.978 225.026,334.014 217.795,330.593 199.367,305.949z").attr(attr).data("county", "Clay");
	label.clayLabel = paper.text(195, 340, 'Clay').attr(font);
	
	wv.mason = paper.path("M 94.714,269.063 90.748,251.261 79.94,247.917 69.445,258.882 52.109,284.308   59.808,309.185 52.734,312.917 74.661,333.909 74.192,312.45 88.341,304.985 109.8,304.517 102.492,297.521 105.99,293.866   94.714,269.063z").attr(attr).data("county", "Mason");
	label.masonLabel = paper.text(78, 290, 'Mason').attr(font);
	
	wv.putnam = paper.path("M 82.19,366.132 74.959,362.712 73.867,312.643 88.016,305.178 109.475,304.709   112.973,301.055 118.203,311.162 109.709,315.438 113.563,332.815 92.452,344.44 89.187,358.823, 82.19,366.132z").attr(attr).data("county", "Putnam");
	label.putnamLabel = paper.text(94, 325, 'Putnam').attr(font);
	
	wv.kanawha = paper.path("M 118.606,310.776 110.113,315.053 114.079,332.856 92.855,344.055 89.59,358.438   100.32,358.204 104.287,376.008 125.745,375.54 136.865,393.188 147.984,410.835 155.137,410.68 161.666,381.912 175.659,367.294   167.803,335.263 178.376,327.875 146.111,325.001 138.724,314.429 124.575,321.894 118.606,310.776z").attr(attr).data("county", "Kanawha");
	label.kanawhaLabel = paper.text(135, 355, 'Kanawha').attr(font);
	
	wv.fayette = paper.path("M 175.659,367.294 161.666,381.912 155.137,410.68 165.944,414.021 166.178,424.75   194.946,431.279 195.024,434.855 209.407,438.12 227.133,430.576 234.286,430.421 226.899,419.848 230.319,412.617 219.278,398.545   219.2,394.969 211.891,387.972 208.002,373.745 197.351,377.555 179.391,374.368 175.659,367.294z").attr(attr).data("county", "Fayette");
	label.fayetteLabel = paper.text(190, 405, 'Fayette').attr(font);
	
	wv.greenbrier = paper.path("M 219.2,394.969 219.278,398.545 230.319,412.617 226.899,419.848 234.286,430.421   227.133,430.576 241.751,444.57 245.484,451.646 270.674,458.251 277.75,454.52 288.556,457.861 295.63,454.129 309.39,428.782   326.882,410.509 333.801,399.624 315.444,400.024 294.064,404.069 283.576,393.563 283.185,375.682 272.299,368.763 240.659,394.5   219.2,394.969z").attr(attr).data("county", "Greenbrier");
	label.greenbrierLabel = paper.text(270, 420, 'Greenbrier').attr(font);
	
	wv.cabell = paper.path("M 52.812,312.725 45.659,312.881 35.476,338.15 17.672,342.117 35.945,359.608   39.443,355.954 43.097,359.452 39.599,363.107 46.908,370.104 57.247,351.987 75.05,348.021 74.738,333.716 52.812,312.725z").attr(attr).data("county", "Cabell");
	label.cabellLabel = paper.text(50, 340, 'Cabell').attr(font);
	
	wv.lincoln = paper.path("M 57.247,351.987 46.908,370.104 40.067,384.565 51.109,398.637 40.692,413.177   54.919,409.288 90.527,401.354 83.296,397.935 86.561,383.551 104.287,376.008 100.32,358.204 89.59,358.438 82.594,365.746   75.363,362.326 75.051,348.021 57.247,351.987z").attr(attr).data("county", "Lincoln");
	label.lincolnLabel = paper.text(68, 380, 'Lincoln').attr(font);
	
	wv.boone = paper.path("M 86.561,383.551 83.296,397.935 90.527,401.354 83.531,408.663 105.223,418.925   105.379,426.077 112.766,436.65 123.417,432.84 127.15,439.915 130.804,443.413 137.879,439.681 130.258,418.379 137.254,411.069   147.984,410.835 136.865,393.188 125.745,375.54 104.287,376.008 86.561,383.551z").attr(attr).data("county", "Boone");
	label.booneLabel = paper.text(115, 400, 'Boone').attr(font);
	
	wv.raleigh = paper.path("M 137.254,411.069 130.258,418.379 137.879,439.681 148.764,446.6 163.694,474.898   160.196,478.554 174.658,485.394 178,474.587 185.075,470.854 192.228,470.698 206.221,456.08 213.452,459.5 216.951,455.846   213.14,445.194 209.407,438.12 195.024,434.855 194.946,431.279 166.178,424.75 165.944,414.021 155.137,410.68 137.254,411.069z").attr(attr).data("county", "Raleigh");
	label.raleighLabel = paper.text(175, 450, 'Raleigh').attr(font);
	
	wv.summers = paper.path("M 209.407,438.12 213.14,445.194 216.951,455.846 213.452,459.5 206.221,456.08   192.228,470.698 221.463,498.685 245.484,451.646 241.751,444.57 227.133,430.576 209.407,438.12z").attr(attr).data("county", "Summers");
	label.summersLabel = paper.text(215, 470, 'Summers').attr("font-size", "8px");
	
	wv.monroe = paper.path("M 245.484,451.646 270.674,458.251 277.75,454.52 288.556,457.861 299.442,464.779   288.947,475.743 292.757,486.395 271.533,497.592 260.648,490.674 232.348,505.604 221.463,498.685 245.484,451.646z").attr(attr).data("county", "Monroe");
	label.monroeLabel = paper.text(260, 480, 'Monroe').attr(font);
	
	wv.wayne = paper.path("M 17.672,342.117 35.945,359.608 39.443,355.954 43.097,359.452 39.599,363.107   46.908,370.104 40.067,384.565 51.109,398.637 40.692,413.177 26.698,427.795 19.311,417.221 0.571,378.271 7.49,367.386   6.943,342.351 17.672,342.117z").attr(attr).data("county", "Wayne");
	label.wayneLabel = paper.text(22, 380, 'Wayne').attr(font);
	
	wv.logan = paper.path("M 90.527,401.354 72.723,405.321 54.919,409.288 62.541,430.591 66.585,451.971   77.548,462.466 102.505,458.343 113.157,454.533 109.346,443.882 127.15,439.915 123.417,432.84 112.766,436.65 105.379,426.077   105.223,418.925 83.531,408.663 87.029,405.009 90.527,401.354z").attr(attr).data("county", "Logan");
	label.loganLabel = paper.text(85, 435, 'Logan').attr(font);
	
	wv.mingo = paper.path("M 40.692,413.177 26.698,427.795 37.818,445.442 59.978,477.162 85.169,483.768   95.821,479.958 102.74,469.072 102.505,458.343 77.548,462.466 66.585,451.971 62.541,430.591 54.919,409.288 40.692,413.177z").attr(attr).data("county", "Mingo");
	label.mingoLabel = paper.text(48, 435, 'Mingo').attr(font);
	
	wv.wyoming = paper.path("M 130.804,443.413 137.879,439.681 148.764,446.6 163.694,474.898 160.196,478.554   174.658,485.394 164.241,499.934 124.51,482.909 103.129,486.954 95.821,479.958 102.74,469.072 102.505,458.343 113.157,454.533   109.346,443.882 127.15,439.915 130.804,443.413z").attr(attr).data("county", "Wyoming");
	label.wyomingLabel = paper.text(130, 470, 'Wyoming').attr(font);
	
	wv.mcdowell = paper.path("M 95.821,479.958 103.129,486.954 124.51,482.909 164.241,499.934 157.322,510.819   136.253,529.169 118.372,529.559 85.715,508.804 78.094,487.501 85.169,483.768 95.821,479.958z").attr(attr).data("county", "McDowell");
	label.mcdowellLabel = paper.text(120, 505, 'McDowell').attr(font);
	
	wv.mercer = paper.path("M 164.241,499.934 157.322,510.819 171.94,524.812 221.698,509.413   217.965,502.339 221.463,498.685 192.228,470.698 185.075,470.854 178,474.587 174.658,485.394 164.241,499.934z").attr(attr).data("county", "Mercer");
	label.mercerLabel = paper.text(190, 500, 'Mercer').attr(font);
	
	wv.grant = paper.path("M 415.342,201.048 390.776,223.053 394.43,226.551 408.58,219.086 412.234,222.585   405.472,240.623 412.703,244.043 405.862,258.505 435.019,282.915 445.281,261.223 437.738,243.497 451.418,214.573   433.302,204.234 415.342,201.048z").attr(attr).data("county", "Grant");
	label.grantLabel = paper.text(425, 238, 'Grant').attr(font);
	
	//End Counties
	
	
	
	//We want the label animation to match hovering over each county's borders
    var labelMouseOver = function(){
		this.attr({"cursor": "pointer"});
		countyName = this.attr("text");
		var county = findCounty(countyName);
		county.animate({fill: '#e0aa0f'}, 500);
	}
	var labelMouseOut = function(){
		countyName = this.attr("text");
		var county = findCounty(countyName);
		county.animate({fill: 'white', stroke: "#666"}, 500);
		paper.safari();
	}
    
	//Control loop that governs animation 
	paper.forEach(function(el){
		if(el.data("county")){
			label = findLabel(el.data("county"));
			el.node.id = label.attr('text');
			var id = "#" + el.node.id;
			$(id).on('mouseenter', function(e){
				el.attr({"cursor": "pointer"});
				el.animate({fill: '#e0aa0f'}, 500);
			});
			$(id).on('mouseleave', function(e){
				el.animate({fill: 'white', stroke: "#666"}, 500);
				paper.safari();
			});
			
	    } else {
	    	el.hover(labelMouseOver, labelMouseOut);
		}
	});
	
	//Functions that bind labels and counties.
	function findCounty(county){
		paper.forEach(function(el){
			if(el.data("county") === county){
				obj = el;
			}
		});
		return obj;
	}
	function findLabel(county){
		paper.forEach(function(el){
			if(el.attr('text') === county){
				obj = el;
			}
		});
		return obj;
	}
});