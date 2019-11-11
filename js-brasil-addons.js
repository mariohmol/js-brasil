(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsbrasilAddons = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsbrasil = require("../index");
var main_1 = require("./main");
main_1.default(jsbrasil);
exports.default = jsbrasil;

},{"../index":4,"./main":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "0": ["0111-3/01", "0111-3/02", "0111-3/03", "0111-3/99", "0112-1/01", "0112-1/02", "0112-1/99", "0113-0/00", "0114-8/00", "0115-6/00", "0116-4/01", "0116-4/02", "0116-4/03", "0116-4/99", "0119-9/01", "0119-9/02", "0119-9/03", "0119-9/04", "0119-9/05", "0119-9/06", "0119-9/07", "0119-9/08", "0119-9/09", "0119-9/99", "0121-1/01", "0121-1/02", "0122-9/00", "0131-8/00", "0132-6/00", "0133-4/01", "0133-4/02", "0133-4/03", "0133-4/04", "0133-4/05", "0133-4/06", "0133-4/07", "0133-4/08", "0133-4/09", "0133-4/10", "0133-4/11", "0133-4/99", "0134-2/00", "0135-1/00", "0139-3/01", "0139-3/02", "0139-3/03", "0139-3/04", "0139-3/05", "0139-3/06", "0139-3/99", "0141-5/01", "0141-5/02", "0142-3/00", "0151-2/01", "0151-2/02", "0151-2/03", "0152-1/01", "0152-1/02", "0152-1/03", "0153-9/01", "0153-9/02", "0154-7/00", "0155-5/01", "0155-5/02", "0155-5/03", "0155-5/04", "0155-5/05", "0159-8/01", "0159-8/02", "0159-8/03", "0159-8/04", "0159-8/99", "0161-0/01", "0161-0/02", "0161-0/03", "0161-0/99", "0162-8/01", "0162-8/02", "0162-8/03", "0162-8/99", "0163-6/00", "0170-9/00", "0210-1/01", "0210-1/02", "0210-1/03", "0210-1/04", "0210-1/05", "0210-1/06", "0210-1/07", "0210-1/08", "0210-1/09", "0210-1/99", "0220-9/01", "0220-9/02", "0220-9/03", "0220-9/04", "0220-9/05", "0220-9/06", "0220-9/99", "0230-6/00", "0311-6/01", "0311-6/02", "0311-6/03", "0311-6/04", "0312-4/01", "0312-4/02", "0312-4/03", "0312-4/04", "0321-3/01", "0321-3/02", "0321-3/03", "0321-3/04", "0321-3/05", "0321-3/99", "0322-1/01", "0322-1/02", "0322-1/03", "0322-1/04", "0322-1/05", "0322-1/06", "0322-1/07", "0322-1/99", "0500-3/01", "0500-3/02", "0600-0/01", "0600-0/02", "0600-0/03", "0710-3/01", "0710-3/02", "0721-9/01", "0721-9/02", "0722-7/01", "0722-7/02", "0723-5/01", "0723-5/02", "0724-3/01", "0724-3/02", "0725-1/00", "0729-4/01", "0729-4/02", "0729-4/03", "0729-4/04", "0729-4/05", "0810-0/01", "0810-0/02", "0810-0/03", "0810-0/04", "0810-0/05", "0810-0/06", "0810-0/07", "0810-0/08", "0810-0/09", "0810-0/10", "0810-0/99", "0891-6/00", "0892-4/01", "0892-4/02", "0892-4/03", "0893-2/00", "0899-1/01", "0899-1/02", "0899-1/03", "0899-1/99", "0910-6/00", "0990-4/01", "0990-4/02", "0990-4/03"],
    "1": ["1011-2/01", "1011-2/02", "1011-2/03", "1011-2/04", "1011-2/05", "1012-1/01", "1012-1/02", "1012-1/03", "1012-1/04", "1013-9/01", "1013-9/02", "1020-1/01", "1020-1/02", "1031-7/00", "1032-5/01", "1032-5/99", "1033-3/01", "1033-3/02", "1041-4/00", "1042-2/00", "1043-1/00", "1051-1/00", "1052-0/00", "1053-8/00", "1061-9/01", "1061-9/02", "1062-7/00", "1063-5/00", "1064-3/00", "1065-1/01", "1065-1/02", "1065-1/03", "1066-0/00", "1069-4/00", "1071-6/00", "1072-4/01", "1072-4/02", "1081-3/01", "1081-3/02", "1082-1/00", "1091-1/01", "1091-1/02", "1092-9/00", "1093-7/01", "1093-7/02", "1094-5/00", "1095-3/00", "1096-1/00", "1099-6/01", "1099-6/02", "1099-6/03", "1099-6/04", "1099-6/05", "1099-6/06", "1099-6/07", "1099-6/99", "1111-9/01", "1111-9/02", "1112-7/00", "1113-5/01", "1113-5/02", "1121-6/00", "1122-4/01", "1122-4/02", "1122-4/03", "1122-4/04", "1122-4/99", "1210-7/00", "1220-4/01", "1220-4/02", "1220-4/03", "1220-4/99", "1311-1/00", "1312-0/00", "1313-8/00", "1314-6/00", "1321-9/00", "1322-7/00", "1323-5/00", "1330-8/00", "1340-5/01", "1340-5/02", "1340-5/99", "1351-1/00", "1352-9/00", "1353-7/00", "1354-5/00", "1359-6/00", "1411-8/01", "1411-8/02", "1412-6/01", "1412-6/02", "1412-6/03", "1413-4/01", "1413-4/02", "1413-4/03", "1414-2/00", "1421-5/00", "1422-3/00", "1510-6/00", "1521-1/00", "1529-7/00", "1531-9/01", "1531-9/02", "1532-7/00", "1533-5/00", "1539-4/00", "1540-8/00", "1610-2/03", "1610-2/04", "1610-2/05", "1621-8/00", "1622-6/01", "1622-6/02", "1622-6/99", "1623-4/00", "1629-3/01", "1629-3/02", "1710-9/00", "1721-4/00", "1722-2/00", "1731-1/00", "1732-0/00", "1733-8/00", "1741-9/01", "1741-9/02", "1742-7/01", "1742-7/02", "1742-7/99", "1749-4/00", "1811-3/01", "1811-3/02", "1812-1/00", "1813-0/01", "1813-0/99", "1821-1/00", "1822-9/01", "1822-9/99", "1830-0/01", "1830-0/02", "1830-0/03", "1910-1/00", "1921-7/00", "1922-5/01", "1922-5/02", "1922-5/99", "1931-4/00", "1932-2/00"],
    "2": ["2011-8/00", "2012-6/00", "2013-4/01", "2013-4/02", "2014-2/00", "2019-3/01", "2019-3/99", "2021-5/00", "2022-3/00", "2029-1/00", "2031-2/00", "2032-1/00", "2033-9/00", "2040-1/00", "2051-7/00", "2052-5/00", "2061-4/00", "2062-2/00", "2063-1/00", "2071-1/00", "2072-0/00", "2073-8/00", "2091-6/00", "2092-4/01", "2092-4/02", "2092-4/03", "2093-2/00", "2094-1/00", "2099-1/01", "2099-1/99", "2110-6/00", "2121-1/01", "2121-1/02", "2121-1/03", "2122-0/00", "2123-8/00", "2211-1/00", "2212-9/00", "2219-6/00", "2221-8/00", "2222-6/00", "2223-4/00", "2229-3/01", "2229-3/02", "2229-3/03", "2229-3/99", "2311-7/00", "2312-5/00", "2319-2/00", "2320-6/00", "2330-3/01", "2330-3/02", "2330-3/03", "2330-3/04", "2330-3/05", "2330-3/99", "2341-9/00", "2342-7/01", "2342-7/02", "2349-4/01", "2349-4/99", "2391-5/01", "2391-5/02", "2391-5/03", "2392-3/00", "2399-1/01", "2399-1/02", "2399-1/99", "2411-3/00", "2412-1/00", "2421-1/00", "2422-9/01", "2422-9/02", "2423-7/01", "2423-7/02", "2424-5/01", "2424-5/02", "2431-8/00", "2439-3/00", "2441-5/01", "2441-5/02", "2442-3/00", "2443-1/00", "2449-1/01", "2449-1/02", "2449-1/03", "2449-1/99", "2451-2/00", "2452-1/00", "2511-0/00", "2512-8/00", "2513-6/00", "2521-7/00", "2522-5/00", "2531-4/01", "2531-4/02", "2532-2/01", "2532-2/02", "2539-0/01", "2539-0/02", "2541-1/00", "2542-0/00", "2543-8/00", "2550-1/01", "2550-1/02", "2591-8/00", "2592-6/01", "2592-6/02", "2593-4/00", "2599-3/01", "2599-3/02", "2599-3/99", "2610-8/00", "2621-3/00", "2622-1/00", "2631-1/00", "2632-9/00", "2640-0/00", "2651-5/00", "2652-3/00", "2660-4/00", "2670-1/01", "2670-1/02", "2680-9/00", "2710-4/01", "2710-4/02", "2710-4/03", "2721-0/00", "2722-8/01", "2722-8/02", "2731-7/00", "2732-5/00", "2733-3/00", "2740-6/01", "2740-6/02", "2751-1/00", "2759-7/01", "2759-7/99", "2790-2/01", "2790-2/02", "2790-2/99", "2811-9/00", "2812-7/00", "2813-5/00", "2814-3/01", "2814-3/02", "2815-1/01", "2815-1/02", "2821-6/01", "2821-6/02", "2822-4/01", "2822-4/02", "2823-2/00", "2824-1/01", "2824-1/02", "2825-9/00", "2829-1/01", "2829-1/99", "2831-3/00", "2832-1/00", "2833-0/00", "2840-2/00", "2851-8/00", "2852-6/00", "2853-4/00", "2854-2/00", "2861-5/00", "2862-3/00", "2863-1/00", "2864-0/00", "2865-8/00", "2866-6/00", "2869-1/00", "2910-7/01", "2910-7/02", "2910-7/03", "2920-4/01", "2920-4/02", "2930-1/01", "2930-1/02", "2930-1/03", "2941-7/00", "2942-5/00", "2943-3/00", "2944-1/00", "2945-0/00", "2949-2/01", "2949-2/99", "2950-6/00"],
    "3": ["3011-3/01", "3011-3/02", "3012-1/00", "3031-8/00", "3032-6/00", "3041-5/00", "3042-3/00", "3050-4/00", "3091-1/01", "3091-1/02", "3092-0/00", "3099-7/00", "3101-2/00", "3102-1/00", "3103-9/00", "3104-7/00", "3211-6/01", "3211-6/02", "3211-6/03", "3212-4/00", "3220-5/00", "3230-2/00", "3240-0/01", "3240-0/02", "3240-0/03", "3240-0/99", "3250-7/01", "3250-7/02", "3250-7/03", "3250-7/04", "3250-7/05", "3250-7/06", "3250-7/07", "3250-7/09", "3291-4/00", "3292-2/01", "3292-2/02", "3299-0/01", "3299-0/02", "3299-0/03", "3299-0/04", "3299-0/05", "3299-0/06", "3299-0/99", "3311-2/00", "3312-1/02", "3312-1/03", "3312-1/04", "3313-9/01", "3313-9/02", "3313-9/99", "3314-7/01", "3314-7/02", "3314-7/03", "3314-7/04", "3314-7/05", "3314-7/06", "3314-7/07", "3314-7/08", "3314-7/09", "3314-7/10", "3314-7/11", "3314-7/12", "3314-7/13", "3314-7/14", "3314-7/15", "3314-7/16", "3314-7/17", "3314-7/18", "3314-7/19", "3314-7/20", "3314-7/21", "3314-7/22", "3314-7/99", "3315-5/00", "3316-3/01", "3316-3/02", "3317-1/01", "3317-1/02", "3319-8/00", "3321-0/00", "3329-5/01", "3329-5/99", "3511-5/01", "3511-5/02", "3512-3/00", "3513-1/00", "3514-0/00", "3520-4/01", "3520-4/02", "3530-1/00", "3600-6/01", "3600-6/02", "3701-1/00", "3702-9/00", "3811-4/00", "3812-2/00", "3821-1/00", "3822-0/00", "3831-9/01", "3831-9/99", "3832-7/00", "3839-4/01", "3839-4/99", "3900-5/00"],
    "4": ["4110-7/00", "4120-4/00", "4211-1/01", "4211-1/02", "4212-0/00", "4213-8/00", "4221-9/01", "4221-9/02", "4221-9/03", "4221-9/04", "4221-9/05", "4222-7/01", "4222-7/02", "4223-5/00", "4291-0/00", "4292-8/01", "4292-8/02", "4299-5/01", "4299-5/99", "4311-8/01", "4311-8/02", "4312-6/00", "4313-4/00", "4319-3/00", "4321-5/00", "4322-3/01", "4322-3/02", "4322-3/03", "4329-1/01", "4329-1/02", "4329-1/03", "4329-1/04", "4329-1/05", "4329-1/99", "4330-4/01", "4330-4/02", "4330-4/03", "4330-4/04", "4330-4/05", "4330-4/99", "4391-6/00", "4399-1/01", "4399-1/02", "4399-1/03", "4399-1/04", "4399-1/05", "4399-1/99", "4511-1/01", "4511-1/02", "4511-1/03", "4511-1/04", "4511-1/05", "4511-1/06", "4512-9/01", "4512-9/02", "4520-0/01", "4520-0/02", "4520-0/03", "4520-0/04", "4520-0/05", "4520-0/06", "4520-0/07", "4520-0/08", "4530-7/01", "4530-7/02", "4530-7/03", "4530-7/04", "4530-7/05", "4530-7/06", "4541-2/01", "4541-2/02", "4541-2/03", "4541-2/04", "4541-2/06", "4541-2/07", "4542-1/01", "4542-1/02", "4543-9/00", "4611-7/00", "4612-5/00", "4613-3/00", "4614-1/00", "4615-0/00", "4616-8/00", "4617-6/00", "4618-4/01", "4618-4/02", "4618-4/03", "4618-4/99", "4619-2/00", "4621-4/00", "4622-2/00", "4623-1/01", "4623-1/02", "4623-1/03", "4623-1/04", "4623-1/05", "4623-1/06", "4623-1/07", "4623-1/08", "4623-1/09", "4623-1/99", "4631-1/00", "4632-0/01", "4632-0/02", "4632-0/03", "4633-8/01", "4633-8/02", "4633-8/03", "4634-6/01", "4634-6/02", "4634-6/03", "4634-6/99", "4635-4/01", "4635-4/02", "4635-4/03", "4635-4/99", "4636-2/01", "4636-2/02", "4637-1/01", "4637-1/02", "4637-1/03", "4637-1/04", "4637-1/05", "4637-1/06", "4637-1/07", "4637-1/99", "4639-7/01", "4639-7/02", "4641-9/01", "4641-9/02", "4641-9/03", "4642-7/01", "4642-7/02", "4643-5/01", "4643-5/02", "4644-3/01", "4644-3/02", "4645-1/01", "4645-1/02", "4645-1/03", "4646-0/01", "4646-0/02", "4647-8/01", "4647-8/02", "4649-4/01", "4649-4/02", "4649-4/03", "4649-4/04", "4649-4/05", "4649-4/06", "4649-4/07", "4649-4/08", "4649-4/09", "4649-4/10", "4649-4/99", "4651-6/01", "4651-6/02", "4652-4/00", "4661-3/00", "4662-1/00", "4663-0/00", "4664-8/00", "4665-6/00", "4669-9/01", "4669-9/99", "4671-1/00", "4672-9/00", "4673-7/00", "4674-5/00", "4679-6/01", "4679-6/02", "4679-6/03", "4679-6/04", "4679-6/99", "4681-8/01", "4681-8/02", "4681-8/03", "4681-8/04", "4681-8/05", "4682-6/00", "4683-4/00", "4684-2/01", "4684-2/02", "4684-2/99", "4685-1/00", "4686-9/01", "4686-9/02", "4687-7/01", "4687-7/02", "4687-7/03", "4689-3/01", "4689-3/02", "4689-3/99", "4691-5/00", "4692-3/00", "4693-1/00", "4711-3/01", "4711-3/02", "4712-1/00", "4713-0/02", "4713-0/04", "4713-0/05", "4721-1/02", "4721-1/03", "4721-1/04", "4722-9/01", "4722-9/02", "4723-7/00", "4724-5/00", "4729-6/01", "4729-6/02", "4729-6/99", "4731-8/00", "4732-6/00", "4741-5/00", "4742-3/00", "4743-1/00", "4744-0/01", "4744-0/02", "4744-0/03", "4744-0/04", "4744-0/05", "4744-0/06", "4744-0/99", "4751-2/01", "4751-2/02", "4752-1/00", "4753-9/00", "4754-7/01", "4754-7/02", "4754-7/03", "4755-5/01", "4755-5/02", "4755-5/03", "4756-3/00", "4757-1/00", "4759-8/01", "4759-8/99", "4761-0/01", "4761-0/02", "4761-0/03", "4762-8/00", "4763-6/01", "4763-6/02", "4763-6/03", "4763-6/04", "4763-6/05", "4771-7/01", "4771-7/02", "4771-7/03", "4771-7/04", "4772-5/00", "4773-3/00", "4774-1/00", "4781-4/00", "4782-2/01", "4782-2/02", "4783-1/01", "4783-1/02", "4784-9/00", "4785-7/01", "4785-7/99", "4789-0/01", "4789-0/02", "4789-0/03", "4789-0/04", "4789-0/05", "4789-0/06", "4789-0/07", "4789-0/08", "4789-0/09", "4789-0/99", "4911-6/00", "4912-4/01", "4912-4/02", "4912-4/03", "4921-3/01", "4921-3/02", "4922-1/01", "4922-1/02", "4922-1/03", "4923-0/01", "4923-0/02", "4924-8/00", "4929-9/01", "4929-9/02", "4929-9/03", "4929-9/04", "4929-9/99", "4930-2/01", "4930-2/02", "4930-2/03", "4930-2/04", "4940-0/00", "4950-7/00"],
    "5": ["5011-4/01", "5011-4/02", "5012-2/01", "5012-2/02", "5021-1/01", "5021-1/02", "5022-0/01", "5022-0/02", "5030-1/01", "5030-1/02", "5030-1/03", "5091-2/01", "5091-2/02", "5099-8/01", "5099-8/99", "5111-1/00", "5112-9/01", "5112-9/99", "5120-0/00", "5130-7/00", "5211-7/01", "5211-7/02", "5211-7/99", "5212-5/00", "5221-4/00", "5222-2/00", "5223-1/00", "5229-0/01", "5229-0/02", "5229-0/99", "5231-1/01", "5231-1/02", "5231-1/03", "5232-0/00", "5239-7/01", "5239-7/99", "5240-1/01", "5240-1/99", "5250-8/01", "5250-8/02", "5250-8/03", "5250-8/04", "5250-8/05", "5310-5/01", "5310-5/02", "5320-2/01", "5320-2/02", "5510-8/01", "5510-8/02", "5510-8/03", "5590-6/01", "5590-6/02", "5590-6/03", "5590-6/99", "5611-2/01", "5611-2/03", "5611-2/04", "5611-2/05", "5612-1/00", "5620-1/01", "5620-1/02", "5620-1/03", "5620-1/04", "5811-5/00", "5812-3/01", "5812-3/02", "5813-1/00", "5819-1/00", "5821-2/00", "5822-1/01", "5822-1/02", "5823-9/00", "5829-8/00", "5911-1/01", "5911-1/02", "5911-1/99", "5912-0/01", "5912-0/02", "5912-0/99", "5913-8/00", "5914-6/00", "5920-1/00"],
    "6": ["6010-1/00", "6021-7/00", "6022-5/01", "6022-5/02", "6110-8/01", "6110-8/02", "6110-8/03", "6110-8/99", "6120-5/01", "6120-5/02", "6120-5/99", "6130-2/00", "6141-8/00", "6142-6/00", "6143-4/00", "6190-6/01", "6190-6/02", "6190-6/99", "6201-5/01", "6201-5/02", "6202-3/00", "6203-1/00", "6204-0/00", "6209-1/00", "6311-9/00", "6319-4/00", "6391-7/00", "6399-2/00", "6410-7/00", "6421-2/00", "6422-1/00", "6423-9/00", "6424-7/01", "6424-7/02", "6424-7/03", "6424-7/04", "6431-0/00", "6432-8/00", "6433-6/00", "6434-4/00", "6435-2/01", "6435-2/02", "6435-2/03", "6436-1/00", "6437-9/00", "6438-7/01", "6438-7/99", "6440-9/00", "6450-6/00", "6461-1/00", "6462-0/00", "6463-8/00", "6470-1/01", "6470-1/02", "6470-1/03", "6491-3/00", "6492-1/00", "6493-0/00", "6499-9/01", "6499-9/02", "6499-9/03", "6499-9/04", "6499-9/05", "6499-9/99", "6511-1/01", "6511-1/02", "6512-0/00", "6520-1/00", "6530-8/00", "6541-3/00", "6542-1/00", "6550-2/00", "6611-8/01", "6611-8/02", "6611-8/03", "6611-8/04", "6612-6/01", "6612-6/02", "6612-6/03", "6612-6/04", "6612-6/05", "6613-4/00", "6619-3/01", "6619-3/02", "6619-3/03", "6619-3/04", "6619-3/05", "6619-3/99", "6621-5/01", "6621-5/02", "6622-3/00", "6629-1/00", "6630-4/00", "6810-2/01", "6810-2/02", "6810-2/03", "6821-8/01", "6821-8/02", "6822-6/00", "6911-7/01", "6911-7/02", "6911-7/03", "6912-5/00", "6920-6/01", "6920-6/02"],
    "7": ["7020-4/00", "7111-1/00", "7112-0/00", "7119-7/01", "7119-7/02", "7119-7/03", "7119-7/04", "7119-7/99", "7120-1/00", "7210-0/00", "7220-7/00", "7311-4/00", "7312-2/00", "7319-0/01", "7319-0/02", "7319-0/03", "7319-0/04", "7319-0/99", "7320-3/00", "7410-2/02", "7410-2/03", "7410-2/99", "7420-0/01", "7420-0/02", "7420-0/03", "7420-0/04", "7420-0/05", "7490-1/01", "7490-1/02", "7490-1/03", "7490-1/04", "7490-1/05", "7490-1/99", "7500-1/00", "7711-0/00", "7719-5/01", "7719-5/02", "7719-5/99", "7721-7/00", "7722-5/00", "7723-3/00", "7729-2/01", "7729-2/02", "7729-2/03", "7729-2/99", "7731-4/00", "7732-2/01", "7732-2/02", "7733-1/00", "7739-0/01", "7739-0/02", "7739-0/03", "7739-0/99", "7740-3/00", "7810-8/00", "7820-5/00", "7830-2/00", "7911-2/00", "7912-1/00", "7990-2/00"],
    "8": ["8011-1/01", "8011-1/02", "8012-9/00", "8020-0/01", "8020-0/02", "8030-7/00", "8111-7/00", "8112-5/00", "8121-4/00", "8122-2/00", "8129-0/00", "8130-3/00", "8211-3/00", "8219-9/01", "8219-9/99", "8220-2/00", "8230-0/01", "8230-0/02", "8291-1/00", "8292-0/00", "8299-7/01", "8299-7/02", "8299-7/03", "8299-7/04", "8299-7/05", "8299-7/06", "8299-7/07", "8299-7/99", "8411-6/00", "8412-4/00", "8413-2/00", "8421-3/00", "8422-1/00", "8423-0/00", "8424-8/00", "8425-6/00", "8430-2/00", "8511-2/00", "8512-1/00", "8513-9/00", "8520-1/00", "8531-7/00", "8532-5/00", "8533-3/00", "8541-4/00", "8542-2/00", "8550-3/01", "8550-3/02", "8591-1/00", "8592-9/01", "8592-9/02", "8592-9/03", "8592-9/99", "8593-7/00", "8599-6/01", "8599-6/02", "8599-6/03", "8599-6/04", "8599-6/05", "8599-6/99", "8610-1/01", "8610-1/02", "8621-6/01", "8621-6/02", "8622-4/00", "8630-5/01", "8630-5/02", "8630-5/03", "8630-5/04", "8630-5/06", "8630-5/07", "8630-5/99", "8640-2/01", "8640-2/02", "8640-2/03", "8640-2/04", "8640-2/05", "8640-2/06", "8640-2/07", "8640-2/08", "8640-2/09", "8640-2/10", "8640-2/11", "8640-2/12", "8640-2/13", "8640-2/14", "8640-2/99", "8650-0/01", "8650-0/02", "8650-0/03", "8650-0/04", "8650-0/05", "8650-0/06", "8650-0/07", "8650-0/99", "8660-7/00", "8690-9/01", "8690-9/02", "8690-9/03", "8690-9/04", "8690-9/99", "8711-5/01", "8711-5/02", "8711-5/03", "8711-5/04", "8711-5/05", "8712-3/00", "8720-4/01", "8720-4/99", "8730-1/01", "8730-1/02", "8730-1/99", "8800-6/00"],
    "9": ["9001-9/01", "9001-9/02", "9001-9/03", "9001-9/04", "9001-9/05", "9001-9/06", "9001-9/99", "9002-7/01", "9002-7/02", "9003-5/00", "9101-5/00", "9102-3/01", "9102-3/02", "9103-1/00", "9200-3/01", "9200-3/02", "9200-3/99", "9311-5/00", "9312-3/00", "9313-1/00", "9319-1/01", "9319-1/99", "9321-2/00", "9329-8/01", "9329-8/02", "9329-8/03", "9329-8/04", "9329-8/99", "9411-1/00", "9412-0/01", "9412-0/99", "9420-1/00", "9430-8/00", "9491-0/00", "9492-8/00", "9493-6/00", "9499-5/00", "9511-8/00", "9512-6/00", "9521-5/00", "9529-1/01", "9529-1/02", "9529-1/03", "9529-1/04", "9529-1/05", "9529-1/06", "9529-1/99", "9601-7/01", "9601-7/02", "9601-7/03", "9602-5/01", "9602-5/02", "9603-3/01", "9603-3/02", "9603-3/03", "9603-3/04", "9603-3/05", "9603-3/99", "9609-2/02", "9609-2/04", "9609-2/05", "9609-2/06", "9609-2/07", "9609-2/08", "9609-2/99", "9700-5/00"],
};

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CNAES = require("./cnaes");
exports.CNAES = CNAES;
function main(jsbrasil) {
    console.log(jsbrasil);
}
exports.default = main;

},{"./cnaes":2}],4:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./src/utils");
var validate_1 = require("./src/validate");
exports.validateBr = validate_1.validateBr;
var faker = require("./src/faker");
var mask = require("./src/mask");
var mask_1 = require("./src/mask");
var placa_1 = require("./src/placa");
var estados_1 = require("./src/estados");
exports.utilsBr = __assign({}, utils, { MASKS: mask_1.MASKS,
    PLACAS_RANGE: placa_1.PLACAS_RANGE,
    ESTADOS: estados_1.ESTADOS });
exports.maskBr = mask.maskBr;
exports.fakerBr = faker.fakerBr;

},{"./src/estados":5,"./src/faker":6,"./src/mask":8,"./src/placa":9,"./src/utils":10,"./src/validate":11}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESTADOS_SIGLA = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma',
    'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs',
    'sc', 'se', 'sp', 'to'
];
exports.ESTADOS = [
    { name: 'Acre', shortname: 'AC', slug: 'acre' },
    { name: 'Alagoas', shortname: 'AL', slug: 'alagoas' },
    { name: 'Amapá', shortname: 'AP', slug: 'amapa' },
    { name: 'Amazonas', shortname: 'AM', slug: 'amazonas' },
    { name: 'Bahia', shortname: 'BA', slug: 'bahia' },
    { name: 'Ceará', shortname: 'CE', slug: 'ceara' },
    { name: 'Distrito Federal', shortname: 'DF', slug: 'distrito-federal' },
    { name: 'Espírito Santo', shortname: 'ES', slug: 'espirito-santo' },
    { name: 'Goiás', shortname: 'GO', slug: 'goias' },
    { name: 'Maranhão', shortname: 'MA', slug: 'maranhao' },
    { name: 'Mato Grosso', shortname: 'MT', slug: 'mato-grosso' },
    { name: 'Mato Grosso do Sul', shortname: 'MS', slug: 'mato-grosso-do-sul' },
    { name: 'Minas Gerais', shortname: 'MG', slug: 'minas-gerais' },
    { name: 'Pará', shortname: 'PA', slug: 'para' },
    { name: 'Paraíba', shortname: 'PB', slug: 'paraiba' },
    { name: 'Paraná', shortname: 'PR', slug: 'parana' },
    { name: 'Pernambuco', shortname: 'PE', slug: 'pernambuco' },
    { name: 'Piauí', shortname: 'PI', slug: 'piaui' },
    { name: 'Rio de Janeiro', shortname: 'RJ', slug: 'rio-de-janeiro' },
    { name: 'Rio Grande do Norte', shortname: 'RN', slug: 'rio-grande-do-norte' },
    { name: 'Rio Grande do Sul', shortname: 'RS', slug: 'rio-grande-do-sul' },
    { name: 'Rondônia', shortname: 'RO', slug: 'rondonia' },
    { name: 'Roraima', shortname: 'RR', slug: 'roraima' },
    { name: 'Santa Catarina', shortname: 'SC', slug: 'santa-catarina' },
    { name: 'São Paulo', shortname: 'SP', slug: 'sao-paulo' },
    { name: 'Sergipe', shortname: 'SE', slug: 'sergipe' },
    { name: 'Tocantins', shortname: 'TO', slug: 'tocantins' }
];

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_1 = require("./estados");
var mask_1 = require("./mask");
var validate_1 = require("./validate");
var randexp_1 = require("randexp");
var placa_1 = require("./placa");
var makeGeneric = function (val, options) {
    if (options === void 0) { options = null; }
    return function () {
        if (!val.textMask || !val.textMask.map) {
            return '';
        }
        var newData = val.textMask.map(function (c, index) {
            if (options && options[index]) {
                return options[index]();
            }
            c = c.toString();
            if (c === /\d/.toString()) {
                return Math.floor(Math.random() * 10).toString();
            }
            else if (c === /[A-Za-z]/.toString()) {
                return randomLetter(1).toString();
            }
            else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
                c = c.replace('/[', '').replace(']/', '').split('-');
                if (parseInt(c[1])) {
                    var mult = c[1] - c[0];
                    var plus = parseInt(c[0]);
                    return (Math.floor(Math.random() * mult) + plus).toString();
                }
                else {
                    return rand(1, [c[0], c[1]]);
                }
            }
            else {
                return c;
            }
        });
        return newData.join('');
    };
};
function rand(length) {
    var ranges = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ranges[_i - 1] = arguments[_i];
    }
    var str = ""; // the string (initialized to "")
    while (length--) { // repeat this length of times
        var ind = Math.floor(Math.random() * ranges.length); // get a random range from the ranges object
        var min = ranges[ind][0].charCodeAt(0), // get the minimum char code allowed for this range
        max = ranges[ind][1].charCodeAt(0); // get the maximum char code allowed for this range
        var c = Math.floor(Math.random() * (max - min + 1)) + min; // get a random char code between min and max
        str += String.fromCharCode(c); // convert it back into a character and append it to the string str
    }
    return str; // return str
}
function randomLetter(size, onlyCapitals) {
    if (size === void 0) { size = 1; }
    if (onlyCapitals === void 0) { onlyCapitals = false; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (onlyCapitals = false) {
        possible += "abcdefghijklmnopqrstuvwxyz";
    }
    possible = possible.split('');
    for (var i = 0; i < size; i++) {
        var pos = Math.floor(Math.random() * possible.length);
        text += possible[pos];
    }
    return text;
}
var randomEstadoSigla = function () {
    var total = estados_1.ESTADOS_SIGLA.length;
    return estados_1.ESTADOS_SIGLA[Math.floor(Math.random() * total)];
};
exports.fakerBr = {
    cep: makeGeneric(mask_1.MASKS['cep']),
    cepState: function (state) {
        return randexp_1.randexp(validate_1.CEPRange[state]);
    },
    cpf: function () {
        var cpf = makeGeneric(mask_1.MASKS['cpf'])();
        var restos = validate_1.create_cpf(cpf);
        cpf = cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
        restos = validate_1.create_cpf(cpf);
        return cpf.substr(0, cpf.length - 2) + restos[0] + restos[1];
    },
    cnpj: function () {
        var cnpj = makeGeneric(mask_1.MASKS['cnpj'])();
        cnpj = cnpj.replace(/[^\d]+/g, '');
        var restos = validate_1.create_cnpj(cnpj);
        cnpj = cnpj.substr(0, cnpj.length - 2) + restos[0] + restos[0];
        restos = validate_1.create_cnpj(cnpj);
        return cnpj.substr(0, cnpj.length - 1) + restos[1];
    },
    rg: function () {
        var random = randomEstadoSigla();
        random = random.split('');
        var makeRg = makeGeneric(mask_1.MASKS['rg'], {
            0: function () { return random[0]; },
            1: function () { return random[1]; }
        });
        return makeRg();
    },
    telefone: makeGeneric(mask_1.MASKS['telefone']),
    celular: makeGeneric(mask_1.MASKS['celular']),
    inscricaoestadual: makeGeneric(mask_1.MASKS['inscricaoestadual']),
    time: makeGeneric(mask_1.MASKS['time']),
    currency: function () {
        var x = Math.random() * 10000;
        return x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    currencyNumber: function () {
        var x = Math.random() * 10000;
        return parseFloat(x.toFixed(2));
    },
    number: function () {
        var x = Math.random() * 10000;
        return parseFloat(x.toFixed(2));
    },
    percentage: makeGeneric(mask_1.MASKS['percentage']),
    pispasep: makeGeneric(mask_1.MASKS['pispasep']),
    placa: function () {
        var placa;
        do {
            placa = makeGeneric(mask_1.MASKS['placa'])();
        } while (!placa_1.validate_placa(placa));
        return placa;
    },
    processo: makeGeneric(mask_1.MASKS['processo']),
    titulo: function () {
        var titulo = makeGeneric(mask_1.MASKS['titulo'])();
        var _a = validate_1.create_titulo(titulo), dig1 = _a.dig1, dig2 = _a.dig2;
        return titulo.substr(0, titulo.length - 2) + dig1 + dig2;
    },
    renavam: function () {
        var renavam = makeGeneric(mask_1.MASKS['renavam'])();
        var dv = validate_1.create_renavam(renavam);
        return renavam.substr(0, renavam.length - 1) + dv;
    }
};

},{"./estados":5,"./mask":8,"./placa":9,"./validate":11,"randexp":13}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/**
 * BASED ON https://github.com/gammasoft/ie/
 */
var funcoesGenerate = {
    ac: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '01')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiroDigito));
        return base + primeiroDigito + segundoDigito;
    },
    am: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    al: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '24')) {
            return false;
        }
        //
        // Removi a validação do tipo da empresa abaixo
        // devido a ambiguidade entre a especificação do
        // Sintegra (http://www.sintegra.gov.br/Cad_Estados/cad_AL.html) e do
        // site do da Sefaz do Alagoas (http://www.sefaz.al.gov.br/sintegra/cad_AL.asp).
        // Veja o issue #4 - https://github.com/gammasoft/ie/issues/4
        //
        // if('03578'.split('').indexOf(valor.substring(2, 3)) === -1) {
        //     return false;
        // }
        var base = primeiros(valor);
        var resto = mod(base) * 10;
        var resT = resto / 11;
        resto = resto - (resT * 11);
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ap: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '03')) {
            return false;
        }
        var base = primeiros(valor);
        var p, d;
        if (entre(base, 3000001, 3017000)) {
            p = 5;
            d = 0;
        }
        else if (entre(base, 3017001, 3019022)) {
            p = 9;
            d = 1;
        }
        else {
            p = 0;
            d = 0;
        }
        var resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);
        var digito;
        if (resto === 1) {
            digito = 0;
        }
        else if (resto === 0) {
            digito = d;
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ba: function (valor) {
        if (tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = primeiros(valor, valor.length - 2);
        var primeiroDigito, segundoDigito;
        var segundoMultiplicador = serie(2, 7);
        var primeiroMultiplicador = serie(2, 8);
        var primeiroResto, segundoResto;
        var digitoComparacao = valor.substring(0, 1);
        if (tamanhoE(valor, 9)) {
            segundoMultiplicador.push(8);
            primeiroMultiplicador.push(9);
            digitoComparacao = valor.substring(1, 2);
        }
        if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
            segundoResto = mod(base, segundoMultiplicador, 10);
            segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;
            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador, 10);
            primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
        }
        else {
            segundoResto = mod(base, segundoMultiplicador);
            segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(segundoResto);
            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
            primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(primeiroResto);
        }
        return base + primeiroDigito + segundoDigito;
    },
    ce: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    df: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '07')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiro = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro));
        return base + primeiro + segundo;
    },
    es: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    go: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (['10', '11', '15'].indexOf(valor.substring(0, 2)) === -1) {
            return false;
        }
        var base = primeiros(valor);
        if (base === '11094402') {
            return valor.substr(8) === '1' || valor.substr(8) === '0';
        }
        var resto = mod(base);
        var digito;
        if (resto === 0) {
            digito = 0;
        }
        else if (resto === 1) {
            if (entre(base, 10103105, 10119997)) {
                digito = 1;
            }
            else {
                digito = 0;
            }
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ma: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '12')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mg: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        var base = primeiros(valor, 11);
        var baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);
        var i = 0;
        var produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
            if (i > [2, 1].length - 1) {
                i = 0;
            }
            return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
        }, '').split('').reduce(function (anterior, atual) {
            return anterior + parseInt(atual, 10);
        }, 0);
        var primeiro = ((Math.floor(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
        if (primeiro === 10) {
            primeiro = 0;
        }
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro, serie(2, 11)));
        return base + primeiro + segundo;
    },
    ms: function (valor) {
        if (naoComecaCom(valor, '28')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mt: function (valor) {
        if (tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = tamanhoE(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
        return calculoTrivialGenerate(valor, base, true);
    },
    pa: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '15')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pb: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pe: function (valor) {
        var base = valor.substring(0, valor.length - 2);
        var restoPrimeiro = mod(base);
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro);
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    pi: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    pr: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor);
        var restoPrimeiro = mod(base, serie(2, 7));
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro, serie(2, 7));
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    rj: function (valor) {
        if (tamanhoNaoE(valor, 8)) {
            return false;
        }
        var base = primeiros(valor, 7);
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base, serie(2, 7)));
        return base + digito;
    },
    rn: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) {
            return false;
        }
        if (naoComecaCom(valor, '20')) {
            return false;
        }
        var base = valor.substring(0, valor.length - 1);
        var multiplicadores = serie(2, 9);
        if (tamanhoE(valor, 10)) {
            multiplicadores.push(10);
        }
        var resto = (mod(base, multiplicadores) * 10) % 11;
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ro: function (valor) {
        var base, digito, resultadoMod;
        if (tamanhoE(valor, 9)) {
            base = valor.substring(3, 8);
            digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
            return valor === valor.substring(0, 3) + base + digito;
        }
        else if (tamanhoE(valor, 14)) {
            base = primeiros(valor, 13);
            resultadoMod = mod(base);
            digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;
            return base + digito;
        }
        else {
            return false;
        }
    },
    rr: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '24')) {
            return false;
        }
        var base = primeiros(valor);
        var digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);
        return base + digito;
    },
    rs: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor, 9);
        return calculoTrivialGenerate(valor, base, true);
    },
    sc: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    se: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    sp: function (valor) {
        valor = valor.toUpperCase();
        var segundaBase;
        if (valor.substr(0, 1) === 'P') {
            if (tamanhoNaoE(valor, 13)) {
                return false;
            }
            var base = valor.substring(1, 9);
            segundaBase = valor.substring(10, 13);
            var resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var digito = resto.length > 1 ? resto[1] : resto[0];
            return 'P' + base + digito + segundaBase;
        }
        else {
            if (tamanhoNaoE(valor, 12)) {
                return false;
            }
            var primeiraBase = primeiros(valor);
            segundaBase = valor.substring(9, 11);
            var primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];
            var segundoResto = mod(primeiraBase + primeiro + segundaBase, serie(2, 10)).toString();
            var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];
            return primeiraBase + primeiro + segundaBase + segundo;
        }
    },
    to: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) {
            return false;
        }
        var base;
        if (tamanhoE(valor, 11)) {
            if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
                return false;
            }
            base = valor.substring(0, 2) + valor.substring(4, 10);
        }
        else {
            base = primeiros(valor);
        }
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        return valor.substring(0, valor.length - 1) + digito;
    },
};
var funcoes = {
    ac: function (valor) {
        return valor === funcoesGenerate.ac(valor);
    },
    am: function (valor) {
        return valor === funcoesGenerate.am(valor);
    },
    al: function (valor) {
        return valor === funcoesGenerate.al(valor);
    },
    ap: function (valor) {
        return valor === funcoesGenerate.ap(valor);
    },
    ba: function (valor) {
        return valor === funcoesGenerate.ba(valor);
    },
    ce: function (valor) {
        return valor === funcoesGenerate.ce(valor);
    },
    es: function (valor) {
        return valor === funcoesGenerate.es(valor);
    },
    go: function (valor) {
        return valor === funcoesGenerate.go(valor);
    },
    ma: function (valor) {
        return valor === funcoesGenerate.ma(valor);
    },
    mg: function (valor) {
        return valor === funcoesGenerate.mg(valor);
    },
    ms: function (valor) {
        return valor === funcoesGenerate.ms(valor);
    },
    mt: function (valor) {
        return valor === funcoesGenerate.mt(valor);
    },
    pa: function (valor) {
        return valor === funcoesGenerate.pa(valor);
    },
    pb: function (valor) {
        return valor === funcoesGenerate.pb(valor);
    },
    pe: function (valor) {
        return valor === funcoesGenerate.pe(valor);
    },
    pi: function (valor) {
        return valor === funcoesGenerate.pi(valor);
    },
    pr: function (valor) {
        return valor === funcoesGenerate.pr(valor);
    },
    rj: function (valor) {
        return valor === funcoesGenerate.rj(valor);
    },
    rn: function (valor) {
        return valor === funcoesGenerate.rn(valor);
    },
    ro: function (valor) {
        return valor === funcoesGenerate.ro(valor);
    },
    rr: function (valor) {
        return valor === funcoesGenerate.rr(valor);
    },
    rs: function (valor) {
        return valor === funcoesGenerate.rs(valor);
    },
    sc: function (valor) {
        return valor === funcoesGenerate.sc(valor);
    },
    se: function (valor) {
        return valor === funcoesGenerate.se(valor);
    },
    sp: function (valor) {
        return valor === funcoesGenerate.sp(valor);
    },
    to: function (valor) {
        return valor === funcoesGenerate.to(valor);
    },
};
function validar(ie, estado) {
    if (eIndefinido(estado) || estado === null) {
        estado = '';
    }
    estado = estado.toLowerCase();
    if (estado !== '' && !(estado in funcoes)) {
        return new Error('estado não é válido');
    }
    if (eIndefinido(ie)) {
        return new Error('ie deve ser fornecida');
    }
    if (Array.isArray(ie)) {
        var retorno_1 = true;
        ie.forEach(function (i) {
            if (!validar(i, estado)) {
                retorno_1 = false;
            }
        });
        return retorno_1;
    }
    if (typeof ie !== 'string') {
        return new Error('ie deve ser string ou array de strings');
    }
    if (!utils_1.allNumbersAreSame(ie)) {
        return new Error('ie com todos dígitos iguais');
    }
    if (ie.match(/^ISENTO$/i)) {
        return true;
    }
    ie = ie.replace(/[\.|\-|\/|\s]/g, '');
    if (estado === '') {
        if (lookup(ie)) {
            return true;
        }
        else {
            return false;
        }
    }
    if (/^\d+$/.test(ie) || estado === 'sp') {
        return funcoes[estado](ie);
    }
    return false;
}
exports.validar = validar;
exports.IEMASKS = {
    ac: {
        text: '01.004.823/001-12',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    al: {
        text: '240000048',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    am: {
        text: '04.145.871-0',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    ap: {
        text: '240000048',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    ba: {
        text: '123456-63',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    ce: {
        text: '06.000001-5',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    df: {
        text: '06 000001 123-55',
        textMask: [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    es: {
        text: '082.560.67-6',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    go: {
        text: '06.000.001-5',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    ma: {
        text: '12.104.376-2',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    mg: {
        text: '001.819.263/0048',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    },
    ms: {
        text: '001819263',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    mt: {
        text: '0018192630-1',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pa: {
        text: '06-000001-5',
        textMask: [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pb: {
        text: '06000001-5',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pe: {
        text: '0192310-24',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    pi: {
        text: '19.301.656-7',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    pr: {
        text: '19301656-78',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    rj: {
        text: '20.040.04-1',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    rn: {
        text: '20.040.040-1',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 9) {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
            }
        }
    },
    ro: {
        text: '101.62521-3',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    rr: {
        text: '24006628-1',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    rs: {
        text: '024/0440013',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    sc: {
        text: '271.234.563',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    se: {
        text: '27123456-3',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    sp: {
        text: '114.814.878.119',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    to: {
        text: '11 81 4878119',
        textMask: [/\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
};
function eIndefinido(objeto) {
    return typeof objeto === typeof undefined;
}
function tamanhoNaoE(string, tamanho) {
    if (tamanho === void 0) { tamanho = 9; }
    if (eIndefinido(tamanho)) {
        tamanho = 9;
    }
    return string.length !== tamanho;
}
function tamanhoE(string, tamanho) {
    return !tamanhoNaoE(string, tamanho);
}
function serie(de, ate) {
    var resultado = [];
    while (de <= ate) {
        resultado.push(de++);
    }
    return resultado;
}
function primeiros(string, quantidade) {
    if (quantidade === void 0) { quantidade = 8; }
    if (eIndefinido(quantidade)) {
        quantidade = 8;
    }
    return string.substring(0, quantidade);
}
function substracaoPor11SeMaiorQue2CasoContrario0(valor) {
    return valor < 2 ? 0 : 11 - valor;
}
function mod(valor, multiplicadores, divisor) {
    if (multiplicadores === void 0) { multiplicadores = serie(2, 9); }
    if (divisor === void 0) { divisor = 11; }
    if (eIndefinido(divisor)) {
        divisor = 11;
    }
    if (eIndefinido(multiplicadores)) {
        multiplicadores = serie(2, 9);
    }
    var i = 0;
    return valor.split('').reduceRight(function (anterior, atual) {
        if (i > multiplicadores.length - 1) {
            i = 0;
        }
        return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
    }, 0) % divisor;
}
function calculoTrivialGenerate(valor, base, validarTamanho) {
    if (base === void 0) { base = null; }
    if (validarTamanho === void 0) { validarTamanho = false; }
    if (!validarTamanho && tamanhoNaoE(valor)) {
        return false;
    }
    if (eIndefinido(base)) {
        base = primeiros(valor);
    }
    if (!base) {
        base = primeiros(valor);
    }
    var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
    return base + digito;
}
function naoComecaCom(string, valor) {
    return string.substring(0, valor.length) !== valor;
}
function entre(valor, limiteInferior, limiteSuperior) {
    if (typeof valor === 'string') {
        valor = parseInt(valor, 10);
    }
    return valor >= limiteInferior && valor <= limiteSuperior;
}
function lookup(ie) {
    var resultado = [];
    for (var estado in funcoes) {
        if (funcoes[estado](ie)) {
            resultado.push(estado);
        }
    }
    if (tamanhoE(resultado, 0)) {
        return false;
    }
    else {
        return resultado;
    }
}

},{"./utils":10}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
var createNumberMask_1 = require("text-mask-addons/dist/createNumberMask");
exports.MASKS = {
    cpf: {
        text: '000.000.000-00',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    cnpj: {
        text: '00.000.000/0000-00',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    celular: {
        text: '(00) 00000-0000',
        textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[5-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    },
    creditcard: {
        text: '0000 0000 0000 0000 00/00 000',
        textMask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '0', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]
    },
    cep: {
        text: '00.000-000',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
    },
    currency: {
        text: '0.000,00',
        textMask: createNumberMask_1.default({
            decimalLimit: 2,
            thousandsSeparatorSymbol: '.',
            decimalSymbol: ',',
            allowDecimal: true,
            integerLimit: 15,
            prefix: 'R$ ',
            suffix: ''
        })
    },
    inscricaoestadual: inscricaoestadual_1.IEMASKS,
    number: {
        text: '0.000,00',
        textMask: createNumberMask_1.default({
            decimalLimit: 2,
            thousandsSeparatorSymbol: '.',
            decimalSymbol: ',',
            allowDecimal: true,
            integerLimit: 15,
            prefix: '',
            suffix: ''
        })
    },
    pispasep: {
        text: '000.00000.00-0',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    percentage: {
        text: '00,00%',
        textMask: createNumberMask_1.default({
            decimalLimit: 2,
            thousandsSeparatorSymbol: '.',
            decimalSymbol: ',',
            allowDecimal: true,
            integerLimit: 15,
            prefix: '',
            suffix: '%'
        })
    },
    placa: {
        text: 'AAA-0000',
        textMask: [/[A-S]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/, /\d/]
    },
    processo: {
        text: '0000000-00.0000.AAA.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, '.', /\d/, /\d/, /\d/, /\d/]
    },
    rg: {
        text: 'AA-00.000.000',
        textMask: [/[A-Za-z]/, /[A-Za-z]/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    renavam: {
        text: '0000000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength < 9) {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            }
            else {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            }
        }
    },
    telefone: {
        text: '(00) 0000-0000',
        textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 10) {
                return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
            else {
                return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        }
    },
    titulo: {
        text: '0000.0000.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
    },
    time: {
        text: '00:00',
        textMask: [/\d/, /\d/, ':', /\d/, /\d/]
    },
    utils: {
        numberToString: function (n) {
            if (!n || typeof n === 'string') {
                return n;
            }
            return (n.toString()).replace('.', ',');
        }
    }
};
var makeGeneric = function (key) {
    return function (value) {
        if (!value) {
            return '';
        }
        var mask = exports.MASKS[key].textMask;
        if (exports.MASKS[key].textMaskFunction) {
            mask = exports.MASKS[key].textMaskFunction(value);
        }
        return conformToMask(value, mask, { guide: false }).conformedValue;
    };
};
exports.maskBr = {
    celular: makeGeneric('celular'),
    cep: makeGeneric('cep'),
    cpf: makeGeneric('cpf'),
    cnpj: makeGeneric('cnpj'),
    inscricaoestadual: function (inscricaoestadualValue, estado) {
        if (!inscricaoestadualValue || !estado || !exports.MASKS.inscricaoestadual[estado] ||
            !exports.MASKS.inscricaoestadual[estado].textMask) {
            return '';
        }
        return conformToMask(inscricaoestadualValue, exports.MASKS.inscricaoestadual[estado].textMask, { guide: false }).conformedValue;
    },
    currency: function (currencyValueInput) {
        if (!currencyValueInput) {
            return '';
        }
        var currencyValue = currencyValueInput.toString();
        if (typeof currencyValueInput === 'number') {
            currencyValue = currencyValue.replace('.', ',');
        }
        var vals = currencyValue.split(',');
        var mask = exports.MASKS.currency.textMask(vals[0]);
        var decimals = vals.length > 1 ? vals[1].toString() : '00';
        if (decimals.length > 2) {
            decimals = decimals.substring(0, 2);
        }
        var finalValue = conformToMask(currencyValue, mask, { guide: false }).conformedValue + ',' + decimals;
        return finalValue;
    },
    number: function (numberValue) {
        if (!numberValue) {
            return '';
        }
        if (!numberValue.split) {
            numberValue += '';
            numberValue = numberValue.replace('.', ',');
        }
        var vals = numberValue.split(',');
        var mask = exports.MASKS.number.textMask(vals[0]);
        var decimals = vals.length > 1 ? vals[1].toString() : '00';
        if (decimals.length > 2) {
            decimals = decimals.substring(0, 2);
        }
        return conformToMask(numberValue, mask, { guide: false }).conformedValue + ',' + decimals;
    },
    percentage: function (percentageValue) {
        if (!percentageValue) {
            return '';
        }
        var vals = percentageValue.split(',');
        var mask = exports.MASKS.percentage.textMask(vals[0]);
        var decimals = vals.length > 1 ? vals[1] : '00';
        return conformToMask(percentageValue, mask, { guide: false }).conformedValue + ',' + decimals;
    },
    pispasep: makeGeneric('pispasep'),
    placa: makeGeneric('placa'),
    renavam: makeGeneric('renavam'),
    processo: makeGeneric('processo'),
    rg: makeGeneric('rg'),
    telefone: makeGeneric('telefone'),
    time: makeGeneric('time'),
    titulo: makeGeneric('titulo')
};
/**
 * FROM TEXT-MASK
 */
exports.placeholderChar = '_';
exports.strFunction = 'function';
var defaultPlaceholderChar = exports.placeholderChar;
var emptyArray = [];
var emptyString = '';
function conformToMask(rawValue, mask, config) {
    if (rawValue === void 0) { rawValue = emptyString; }
    if (mask === void 0) { mask = emptyArray; }
    if (config === void 0) { config = {}; }
    if (!utils_1.isArray(mask)) {
        // If someone passes a function as the mask property, we should call the
        // function to get the mask array - Normally this is handled by the
        // `createTextMaskInputElement:update` function - this allows mask functions
        // to be used directly with `conformToMask`
        if (typeof mask === exports.strFunction) {
            // call the mask function to get the mask array
            mask = mask(rawValue, config);
            // mask functions can setup caret traps to have some control over how the caret moves. We need to process
            // the mask for any caret traps. `processCaretTraps` will remove the caret traps from the mask
            mask = utils_1.processCaretTraps(mask).maskWithoutCaretTraps;
        }
        else {
            throw new Error('Text-mask:conformToMask; The mask property must be an array.');
        }
    }
    // These configurations tell us how to conform the mask
    var guide = config.guide || true;
    var previousConformedValue = config.previousConformedValue || emptyString;
    var placeholder = convertMaskToPlaceholder(mask, exports.placeholderChar);
    var currentCaretPosition = config.currentCaretPosition;
    var keepCharPositions = config.keepCharPositions;
    // The configs below indicate that the user wants the algorithm to work in *no guide* mode
    var suppressGuide = guide === false && previousConformedValue !== undefined;
    // Calculate lengths once for performance
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var maskLength = mask.length;
    // This tells us the number of edited characters and the direction in which they were edited (+/-)
    var editDistance = rawValueLength - previousConformedValueLength;
    // In *no guide* mode, we need to know if the user is trying to add a character or not
    var isAddition = editDistance > 0;
    // Tells us the index of the first change. For (438) 394-4938 to (38) 394-4938, that would be 1
    var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
    // We're also gonna need the index of last change, which we can derive as follows...
    var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);
    // If `conformToMask` is configured to keep character positions, that is, for mask 111, previous value
    // _2_ and raw value 3_2_, the new conformed value should be 32_, not 3_2 (default behavior). That's in the case of
    // addition. And in the case of deletion, previous value _23, raw value _3, the new conformed string should be
    // __3, not _3_ (default behavior)
    //
    // The next block of logic handles keeping character positions for the case of deletion. (Keeping
    // character positions for the case of addition is further down since it is handled differently.)
    // To do this, we want to compensate for all characters that were deleted
    if (keepCharPositions === true && !isAddition) {
        // We will be storing the new placeholder characters in this variable.
        var compensatingPlaceholderChars = emptyString;
        // For every character that was deleted from a placeholder position, we add a placeholder char
        for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                compensatingPlaceholderChars += exports.placeholderChar;
            }
        }
        // Now we trick our algorithm by modifying the raw value to make it contain additional placeholder characters
        // That way when the we start laying the characters again on the mask, it will keep the non-deleted characters
        // in their positions.
        rawValue = (rawValue.slice(0, indexOfFirstChange) +
            compensatingPlaceholderChars +
            rawValue.slice(indexOfFirstChange, rawValueLength));
    }
    // Convert `rawValue` string to an array, and mark characters based on whether they are newly added or have
    // existed in the previous conformed value. Identifying new and old characters is needed for `conformToMask`
    // to work if it is configured to keep character positions.
    var rawValueArr = rawValue
        .split(emptyString)
        .map(function (char, i) { return ({ char: char, isNew: i >= indexOfFirstChange && i < indexOfLastChange }); });
    // The loop below removes masking characters from user input. For example, for mask
    // `00 (111)`, the placeholder would be `00 (___)`. If user input is `00 (234)`, the loop below
    // would remove all characters but `234` from the `rawValueArr`. The rest of the algorithm
    // then would lay `234` on top of the available placeholder positions in the mask.
    for (var i = rawValueLength - 1; i >= 0; i--) {
        var char = rawValueArr[i].char;
        if (char !== exports.placeholderChar) {
            var shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength;
            if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
                rawValueArr.splice(i, 1);
            }
        }
    }
    // This is the variable that we will be filling with characters as we figure them out
    // in the algorithm below
    var conformedValue = emptyString;
    var someCharsRejected = false;
    // Ok, so first we loop through the placeholder looking for placeholder characters to fill up.
    placeholderLoop: for (var i = 0; i < placeholderLength; i++) {
        var charInPlaceholder = placeholder[i];
        // We see one. Let's find out what we can put in it.
        if (charInPlaceholder === exports.placeholderChar) {
            // But before that, do we actually have any user characters that need a place?
            if (rawValueArr.length > 0) {
                // We will keep chipping away at user input until either we run out of characters
                // or we find at least one character that we can map.
                while (rawValueArr.length > 0) {
                    // Let's retrieve the first user character in the queue of characters we have left
                    var shift = rawValueArr.shift();
                    var rawValueChar = '', isNew = false;
                    if (shift) {
                        rawValueChar = shift.char;
                        isNew = shift.isNew;
                    }
                    // If the character we got from the user input is a placeholder character (which happens
                    // regularly because user input could be something like (540) 90_-____, which includes
                    // a bunch of `_` which are placeholder characters) and we are not in *no guide* mode,
                    // then we map this placeholder character to the current spot in the placeholder
                    if (rawValueChar === exports.placeholderChar && suppressGuide !== true) {
                        conformedValue += exports.placeholderChar;
                        // And we go to find the next placeholder character that needs filling
                        continue placeholderLoop;
                        // Else if, the character we got from the user input is not a placeholder, let's see
                        // if the current position in the mask can accept it.
                    }
                    else if (mask[i].test(rawValueChar)) {
                        // we map the character differently based on whether we are keeping character positions or not.
                        // If any of the conditions below are met, we simply map the raw value character to the
                        // placeholder position.
                        if (keepCharPositions !== true ||
                            isNew === false ||
                            previousConformedValue === emptyString ||
                            guide === false ||
                            !isAddition) {
                            conformedValue += rawValueChar;
                        }
                        else {
                            // We enter this block of code if we are trying to keep character positions and none of the conditions
                            // above is met. In this case, we need to see if there's an available spot for the raw value character
                            // to be mapped to. If we couldn't find a spot, we will discard the character.
                            //
                            // For example, for mask `1111`, previous conformed value `_2__`, raw value `942_2__`. We can map the
                            // `9`, to the first available placeholder position, but then, there are no more spots available for the
                            // `4` and `2`. So, we discard them and end up with a conformed value of `92__`.
                            var rawValueArrLength = rawValueArr.length;
                            var indexOfNextAvailablePlaceholderChar = null;
                            // Let's loop through the remaining raw value characters. We are looking for either a suitable spot, ie,
                            // a placeholder character or a non-suitable spot, ie, a non-placeholder character that is not new.
                            // If we see a suitable spot first, we store its position and exit the loop. If we see a non-suitable
                            // spot first, we exit the loop and our `indexOfNextAvailablePlaceholderChar` will stay as `null`.
                            for (var i_1 = 0; i_1 < rawValueArrLength; i_1++) {
                                var charData = rawValueArr[i_1];
                                if (charData.char !== exports.placeholderChar && charData.isNew === false) {
                                    break;
                                }
                                if (charData.char === exports.placeholderChar) {
                                    indexOfNextAvailablePlaceholderChar = i_1;
                                    break;
                                }
                            }
                            // If `indexOfNextAvailablePlaceholderChar` is not `null`, that means the character is not blocked.
                            // We can map it. And to keep the character positions, we remove the placeholder character
                            // from the remaining characters
                            if (indexOfNextAvailablePlaceholderChar !== null) {
                                conformedValue += rawValueChar;
                                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                                // If `indexOfNextAvailablePlaceholderChar` is `null`, that means the character is blocked. We have to
                                // discard it.
                            }
                            else {
                                i--;
                            }
                        }
                        // Since we've mapped this placeholder position. We move on to the next one.
                        continue placeholderLoop;
                    }
                    else {
                        someCharsRejected = true;
                    }
                }
            }
            // We reach this point when we've mapped all the user input characters to placeholder
            // positions in the mask. In *guide* mode, we append the left over characters in the
            // placeholder to the `conformedString`, but in *no guide* mode, we don't wanna do that.
            //
            // That is, for mask `(111)` and user input `2`, we want to return `(2`, not `(2__)`.
            if (suppressGuide === false) {
                conformedValue += placeholder.substr(i, placeholderLength);
            }
            // And we break
            break;
            // Else, the charInPlaceholder is not a placeholderChar. That is, we cannot fill it
            // with user input. So we just map it to the final output
        }
        else {
            conformedValue += charInPlaceholder;
        }
    }
    // The following logic is needed to deal with the case of deletion in *no guide* mode.
    //
    // Consider the silly mask `(111) /// 1`. What if user tries to delete the last placeholder
    // position? Something like `(589) /// `. We want to conform that to `(589`. Not `(589) /// `.
    // That's why the logic below finds the last filled placeholder character, and removes everything
    // from that point on.
    if (suppressGuide && isAddition === false) {
        var indexOfLastFilledPlaceholderChar = null;
        // Find the last filled placeholder position and substring from there
        for (var i = 0; i < conformedValue.length; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                indexOfLastFilledPlaceholderChar = i;
            }
        }
        if (indexOfLastFilledPlaceholderChar !== null) {
            // We substring from the beginning until the position after the last filled placeholder char.
            conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
        }
        else {
            // If we couldn't find `indexOfLastFilledPlaceholderChar` that means the user deleted
            // the first character in the mask. So we return an empty string.
            conformedValue = emptyString;
        }
    }
    return { conformedValue: conformedValue, meta: { someCharsRejected: someCharsRejected } };
}
exports.conformToMask = conformToMask;
function convertMaskToPlaceholder(mask, placeholderChar) {
    if (mask === void 0) { mask = emptyArray; }
    if (placeholderChar === void 0) { placeholderChar = defaultPlaceholderChar; }
    if (!utils_1.isArray(mask)) {
        throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
    }
    if (mask.indexOf(placeholderChar) !== -1) {
        throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' +
            'that is not present in your mask as your placeholder character.\n\n' +
            ("The placeholder character that was received is: " + JSON.stringify(placeholderChar) + "\n\n") +
            ("The mask that was received is: " + JSON.stringify(mask)));
    }
    return mask.map(function (char) {
        return (char instanceof RegExp) ? placeholderChar : char;
    }).join('');
}
exports.convertMaskToPlaceholder = convertMaskToPlaceholder;

},{"./inscricaoestadual":7,"./utils":10,"text-mask-addons/dist/createNumberMask":19}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACAS_RANGE = [
    { start: 'AAA0001', end: 'BEZ9999', state: '', desc: 'Paraná]] (PR)', since: '02/1990' },
    { start: 'BFA0001', end: 'GKI9999', state: '', desc: 'São Paulo (estado)|São Paulo]] (SP)', since: '10/1991' },
    { start: 'GKJ0001', end: 'HOK9999', state: '', desc: 'Minas Gerais]] (MG)', since: '09/1991' },
    { start: 'HOL0001', end: 'HQE9999', state: '', desc: 'Maranhão]] (MA)', since: '01/1992' },
    { start: 'HQF0001', end: 'HTW9999', state: '', desc: 'Mato Grosso do Sul]] (MS)', since: '03/1992' },
    { start: 'HTX0001', end: 'HZA9999', state: '', desc: 'Ceará]] (CE)', since: '10/1992' },
    { start: 'HZB0001', end: 'IAP9999', state: '', desc: 'Sergipe]] (SE)', since: '09/1993' },
    { start: 'IAQ0001', end: 'JDO9999', state: '', desc: 'Rio Grande do Sul]] (RS)', since: '03/1992' },
    { start: 'JDP0001', end: 'JKR9999', state: '', desc: 'Distrito Federal (Brasil)|Distrito Federal]] (DF)', since: '04/1994' },
    { start: 'JKS0001', end: 'JSZ9999', state: '', desc: 'Bahia]] (BA)', since: '08/1993' },
    { start: 'JTA0001', end: 'JWE9999', state: '', desc: 'Pará]] (PA)', since: '07/1993' },
    { start: 'JWF0001', end: 'JXY9999', state: '', desc: 'Amazonas]] (AM)', since: '09/1993' },
    { start: 'JXZ0001', end: 'KAU9999', state: '', desc: 'Mato Grosso]] (MT)', since: '09/1993' },
    { start: 'KAV0001', end: 'KFC9999', state: '', desc: 'Goiás]] (GO)', since: '05/1994' },
    { start: 'KFD0001', end: 'KME9999', state: '', desc: 'Pernambuco]] (PE) ', since: '08/1994' },
    { start: 'KMF0001', end: 'LVE9999', state: '', desc: 'Rio de Janeiro (estado)|Rio de Janeiro]] (RJ)', since: '05/1994' },
    { start: 'LVF0001', end: 'LWQ9999', state: '', desc: 'Piauí]] (PI)', since: '04/1996' },
    { start: 'LWR0001', end: 'MMM9999', state: '', desc: 'Santa Catarina]] (SC)', since: '06/1996' },
    { start: 'MMN0001', end: 'MOW9999', state: '', desc: 'Paraíba]] (PB)', since: '07/1996' },
    { start: 'MOX0001', end: 'MTZ9999', state: '', desc: 'Espírito Santo (estado)|Espírito Santo]] (ES)', since: '12/1995' },
    { start: 'MUA0001', end: 'MVK9999', state: '', desc: 'Alagoas]] (AL)', since: '08/1996' },
    { start: 'MVL0001', end: 'MXG9999', state: '', desc: 'Tocantins]] (TO)', since: '11/1996' },
    { start: 'MXH0001', end: 'MZM9999', state: '', desc: 'Rio Grande do Norte]] (RN)', since: '06/1998' },
    { start: 'MZN0001', end: 'NAG9999', state: '', desc: 'Acre]] (AC)', since: '06/1998' },
    { start: 'NAH0001', end: 'NBA9999', state: '', desc: 'Roraima]] (RR)', since: '07/1998' },
    { start: 'NBB0001', end: 'NEH9999', state: '', desc: 'Rondônia]] (RO)', since: '07/1998' },
    { start: 'NEI0001', end: 'NFB9999', state: '', desc: 'Amapá]] (AP)', since: '09/1998' },
    { start: 'NFC0001', end: 'NGZ9999', state: '', desc: 'Goiás]] (GO) 2ª sequência', since: '08/2003' },
    { start: 'NHA0001', end: 'NHT9999', state: '', desc: 'Maranhão]] (MA) 2ª sequência', since: '12/2006' },
    { start: 'NHU0001', end: 'NIX9999', state: '', desc: 'Piauí]] (PI) 2ª sequência', since: '05/2007' },
    { start: 'NIY0001', end: 'NJW9999', state: '', desc: 'Mato Grosso]] (MT) 2ª sequência', since: '10/2007' },
    { start: 'NJX0001', end: 'NLU9999', state: '', desc: 'Goiás]] (GO) 3ª sequência', since: '11/2007' },
    { start: 'NLV0001', end: 'NMO9999', state: '', desc: 'Alagoas]] (AL) 2ª sequência', since: '01/2008' },
    { start: 'NMP0001', end: 'NNI9999', state: '', desc: 'Maranhão]] (MA) 3ª sequência', since: '05/2008' },
    { start: 'NNJ0001', end: 'NOH9999', state: '', desc: 'Rio Grande do Norte]] (RN) 2ª sequência', since: '07/2008' },
    { start: 'NOI0001', end: 'NPB9999', state: '', desc: 'Amazonas]] (AM) 2ª sequência', since: '07/2008' },
    { start: 'NPC0001', end: 'NPQ9999', state: '', desc: 'Mato Grosso]] (MT) 3ª sequência', since: '09/2008' },
    { start: 'NPR0001', end: 'NQK9999', state: '', desc: 'Paraíba]] (PB) 2ª sequência', since: '11/2008' },
    { start: 'NQL0001', end: 'NRE9999', state: '', desc: 'Ceará]] (CE) 2ª sequência', since: '12/2008' },
    { start: 'NRF0001', end: 'NSD9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 2ª sequência', since: '11/2009' },
    { start: 'NSE0001', end: 'NTC9999', state: '', desc: 'Pará]] (PA) 2ª sequência', since: '11/2009' },
    { start: 'NTD0001', end: 'NTW9999', state: '', desc: 'Bahia]] (BA) 2ª sequência', since: '02/2010' },
    { start: 'NTX0001', end: 'NUG9999', state: '', desc: 'Mato Grosso]] (MT) 4ª sequência', since: '03/2010' },
    { start: 'NUH0001', end: 'NUL9999', state: '', desc: 'Roraima]] (RR) 2ª sequência', since: '06/2010' },
    { start: 'NUM0001', end: 'NVF9999', state: '', desc: 'Ceará]] (CE) 3ª sequência', since: '06/2010' },
    { start: 'NVG0001', end: 'NVN9999', state: '', desc: 'Sergipe]] (SE) 2ª sequência', since: '03/2010' },
    { start: 'NVO0001', end: 'NWR9999', state: '', desc: 'Goiás]] (GO) 4ª sequência', since: '03/2010' },
    { start: 'NWS0001', end: 'NXQ9999', state: '', desc: 'Maranhão]] (MA) 4ª sequência', since: '07/2010' },
    { start: 'NXR0001', end: 'NXT9999', state: '', desc: 'Acre]] (AC) 2ª sequência', since: '05/2011' },
    { start: 'NXU0001', end: 'NXW9999', state: '', desc: 'Pernambuco]] (PE) 2ª sequência', since: '07/2010' },
    { start: 'NXX0001', end: 'NYG9999', state: '', desc: 'Minas Gerais]] (MG) 2ª sequência', since: '10/2011' },
    { start: 'NYH0001', end: 'NZZ9999', state: '', desc: 'Bahia]] (BA) 3ª sequência', since: '10/2010' },
    { start: 'OAA0001', end: 'OAO9999', state: '', desc: 'Amazonas]] (AM) 3ª sequência', since: '12/2010' },
    { start: 'OAP0001', end: 'OBS9999', state: '', desc: 'Mato Grosso]] (MT) 5ª sequência', since: '05/2011' },
    { start: 'OBT0001', end: 'OCA9999', state: '', desc: 'Pará]] (PA) 3ª sequência', since: '07/2011' },
    { start: 'OCB0001', end: 'OCU9999', state: '', desc: 'Ceará]] (CE) 4ª sequência', since: '02/2011' },
    { start: 'OCV0001', end: 'ODT9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 2ª sequênci', since: '05/2011' },
    { start: 'ODU0001', end: 'OEI9999', state: '', desc: 'Piauí]] (PI) 3ª sequência', since: '09/2011' },
    { start: 'OEJ0001', end: 'OES9999', state: '', desc: 'Sergipe]] (SE) 3ª sequência', since: '08/2011' },
    { start: 'OET0001', end: 'OFH9999', state: '', desc: 'Paraíba]] (PB) 3ª sequência', since: '04/2011' },
    { start: 'OFI0001', end: 'OFW9999', state: '', desc: 'Pará]] (PA) 4ª sequência', since: '03/2011' },
    { start: 'OFX0001', end: 'OGG9999', state: '', desc: 'Paraíba]] (PB) 4ª sequência', since: '06/2011' },
    { start: 'OGH0001', end: 'OHA9999', state: '', desc: 'Goiás]] (GO) 5ª sequência', since: '04/2011' },
    { start: 'OHB0001', end: 'OHK9999', state: '', desc: 'Alagoas]] (AL) 3ª sequência', since: '09/2011' },
    { start: 'OHL0001', end: 'OHW9999', state: '', desc: 'Rondônia]] (RO) 2ª sequência', since: '11/2011' },
    { start: 'OHX0001', end: 'OIQ9999', state: '', desc: 'Ceará]] (CE) 5ª sequência', since: '12/2011' },
    { start: 'OIR0001', end: 'OJQ9999', state: '', desc: 'Maranhão]] (MA) 5ª sequência', since: '01/2012' },
    { start: 'OJR0001', end: 'OKC9999', state: '', desc: 'Rio Grande do Norte]] (RN) 3ª sequência', since: '04/2012' },
    { start: 'OKD0001', end: 'OKH9999', state: '', desc: 'Santa Catarina]] (SC) 2ª sequência', since: '02/2014' },
    { start: 'OKI0001', end: 'OLG9999', state: '', desc: 'Bahia]] (BA) 4ª sequência', since: '10/2011' },
    { start: 'OLH0001', end: 'OLN9999', state: '', desc: 'Tocantins]] (TO) 2ª sequência', since: '02/2012' },
    { start: 'OLO0001', end: 'OMH9999', state: '', desc: 'Minas Gerais]] (MG) 3ª sequência', since: '03/2012' },
    { start: 'OMI0001', end: 'OOF9999', state: '', desc: 'Goiás]] (GO) 6ª sequência', since: '04/2012' },
    { start: 'OOG0001', end: 'OOU9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 3ª sequência', since: '02/2012' },
    { start: 'OOV0001', end: 'ORC9999', state: '', desc: 'Minas Gerais]] (MG) 4ª sequência', since: '06/2012' },
    { start: 'ORD0001', end: 'ORM9999', state: '', desc: 'Alagoas]] (AL) 4ªsequência', since: '01/2012' },
    { start: 'ORN0001', end: 'OSV9999', state: '', desc: 'Ceará]] (CE) 6ª sequência', since: '07/2012' },
    { start: 'OSW0001', end: 'OTZ9999', state: '', desc: 'Pará]] (PA) 5ª sequência', since: '08/2012' },
    { start: 'OUA0001', end: 'OUE9999', state: '', desc: 'Piauí]] (PI) 4ª sequência', since: '11/2012' },
    { start: 'OUF0001', end: 'OVD9999', state: '', desc: 'Bahia]] (BA) 5ª sequência', since: '12/2012' },
    { start: 'OVE0001', end: 'OVF9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 3ª sequênci', since: '12/2012' },
    { start: 'OVG0001', end: 'OVG9999', state: '', desc: 'Acre]] (AC) 3ª sequência', since: '05/2013' },
    { start: 'OVH0001', end: 'OVL9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 4ª sequênci', since: '07/2013' },
    { start: 'OVM0001', end: 'OVV9999', state: '', desc: 'Distrito Federal]] (DF) 2ª sequência', since: '11/2013' },
    { start: 'OVW0001', end: 'OVY9999', state: '', desc: 'Piauí]] (PI) 5ª sequência', since: '10/2013' },
    { start: 'OVZ0001', end: 'OWG9999', state: '', desc: 'Rio Grande do Norte]] (RN) 4ª sequência', since: '06/2013' },
    { start: 'OWH0001', end: 'OXK9999', state: '', desc: 'Minas Gerais]] (MG) 5ª sequência', since: '10/2013' },
    { start: 'OXL0001', end: 'OXL9999', state: '', desc: 'Rondônia]] (RO) 3ª sequência', since: '11/2013' },
    { start: 'OXM0001', end: 'OXM9999', state: '', desc: 'Amazonas]] (AM) 4ª sequência', since: '11/2013' },
    { start: 'OXN0001', end: 'OXN9999', state: '', desc: 'Alagoas]] (AL) 5ª sequência', since: '11/2013' },
    { start: 'OXO0001', end: 'OXO9999', state: '', desc: 'Paraíba]] (PB) 5ª sequência', since: '11/2013' },
    { start: 'OXP0001', end: 'OXP9999', state: '', desc: 'Acre]] (AC) 4ª sequência', since: '12/2013' },
    { start: 'OXQ0001', end: 'OXZ9999', state: '', desc: 'Maranhão]] (MA) 6ª sequência', since: '04/2014' },
    { start: 'OYA0001', end: 'OYC9999', state: '', desc: 'Tocantins]] (TO) 3ª sequência', since: '11/2013' },
    { start: 'OYD0001', end: 'OYK9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 5ª sequênci', since: '12/2013' },
    { start: 'OYL0001', end: 'OYZ9999', state: '', desc: 'Pernambuco]] (PE) 6ª sequência', since: '02/2014' },
    { start: 'OZA0001', end: 'OZA9999', state: '', desc: 'Ceará]] (CE) 7ª sequência', since: '01/2014' },
    { start: 'OZB0001', end: 'OZB9999', state: '', desc: 'Sergipe]] (SE) 4ª sequência', since: '01/2014' },
    { start: 'OZC0001', end: 'OZV9999', state: '', desc: 'Bahia]] (BA) 6ª sequência', since: '03/2014' },
    { start: 'OZW0001', end: 'PBZ9999', state: '', desc: 'Distrito Federal]] (DF) 3ª sequência', since: '05/2014' },
    { start: 'PCA0001', end: 'PED9999', state: '', desc: 'Pernambuco]] (PE) 7ª sequência', since: '12/2014' },
    { start: 'PEE0001', end: 'PFQ9999', state: '', desc: 'Pernambuco]] (PE) 3ª sequência', since: '09/2010' },
    { start: 'PFR0001', end: 'PGK9999', state: '', desc: 'Pernambuco]] (PE) 4ª sequência', since: '07/2012' },
    { start: 'PGL0001', end: 'PGU9999', state: '', desc: 'Pernambuco]] (PE) 5ª sequência', since: '10/2013' },
    { start: 'PGV0001', end: 'PGZ9999', state: '', desc: 'Pernambuco]] (PE) 8ª sequência', since: '12/2014' },
    { start: 'PHA0001', end: 'PHZ9999', state: '', desc: 'Amazonas]] (AM) 5ª sequência', since: '06/2014' },
    { start: 'PIA0001', end: 'PIZ9999', state: '', desc: 'Piauí]] (PI) 6ª sequência', since: '06/2014' },
    { start: 'PJA0001', end: 'PLZ9999', state: '', desc: 'Bahia]] (BA) 7ª sequência', since: '10/2014' },
    { start: 'PMA0001', end: 'POZ9999', state: '', desc: 'Ceará]] (CE) 8ª sequência', since: '06/2014' },
    { start: 'PPA0001', end: 'PPZ9999', state: '', desc: 'spírito Santo (estado)|Espírito Santo]] (ES) 6ª sequênci', since: '08/2014' },
    { start: 'PQA0001', end: 'PRZ9999', state: '', desc: 'Goiás]] (GO) 7ª sequência', since: '03/2015' },
    { start: 'PSA0001', end: 'PTZ9999', state: '', desc: 'Maranhão]] (MA) 7ª sequência', since: '12/2014' },
    { start: 'PUA0001', end: 'PZZ9999', state: '', desc: 'Minas Gerais]] (MG) 6ª sequência', since: '05/2014' },
    { start: 'QAA0001', end: 'QAZ9999', state: '', desc: 'Mato Grosso do Sul]] (MS) 4ª sequência', since: '12/2014' },
    { start: 'QBA0001', end: 'QCZ9999', state: '', desc: 'Mato Grosso]] (MT) 6ª sequência', since: '05/2014' },
    { start: 'QDA0001', end: 'QEZ9999', state: '', desc: 'Pará]] (PA) 6ª sequência', since: '10/2014' },
    { start: 'QFA0001', end: 'QFZ9999', state: '', desc: 'Paraíba]] (PB) 6ª sequência', since: '05/2014' },
    { start: 'QGA0001', end: 'QGZ9999', state: '', desc: 'Rio Grande do Norte]] (RN) 5ª sequência', since: '09/2014' },
    { start: 'QHA0001', end: 'QJZ9999', state: '', desc: 'Santa Catarina]] (SC) 3ª sequência', since: '05/2014' },
    { start: 'QKA0001', end: 'QKM9999', state: '', desc: 'Tocantins]] (TO) 4ª sequência', since: '11/2014' },
    { start: 'QKN0001', end: 'QKZ9999', state: '', desc: 'Sergipe]] (SE) 5ª sequência', since: '06/2014' },
    { start: 'QLA0001', end: 'QLM9999', state: '', desc: 'Alagoas]] (AL) 6ª sequência', since: '09/2015' },
    { start: 'QLN0001', end: 'QLT9999', state: '', desc: 'Amapá]] (AP) 2ª sequência', since: '01/2015' },
    { start: 'QLU0001', end: 'QLZ9999', state: '', desc: 'Acre]] (AC) 5ª sequência', since: '08/2014' },
    { start: 'QMA0001', end: 'QMP9999', state: '', desc: 'Sergipe]] (SE) 6ª sequência', since: '03/2017' },
    { start: 'QMQ0001', end: 'QQZ9999', state: '', desc: 'Minas Gerais]] (MG) 7ª sequência ', since: '07/2017' },
    { start: 'QRA0001', end: 'QRA9999', state: '', desc: 'Rondônia]] (RO) 4ª sequência', since: '11/2017' },
    { start: 'QRB0001', end: 'QRZ9999', state: '', desc: 'Espírito Santo (estado)|Espírito Santo]] (ES) 7ª sequência', since: '05/2018' },
    { start: 'QSA0001', end: 'QSZ9999', state: '', desc: 'Paraíba]] (PB) 7ª sequência', since: '04/2018' },
    { start: 'QTA0001', end: 'QTB9999', state: '', desc: 'Rondônia]] (RO) 5ª sequência', since: '08/2018' },
    { start: 'QTC0001', end: 'RIN9999', state: '', desc: 'quên', since: 'inidas ' },
    { start: 'RIO0001', end: 'RIO9999', state: '', desc: 'Rio de Janeiro (estado)|Rio de Janeiro]] (RJ) 2ª sequência ', since: '9/2018}' },
    { start: 'RLA0001', end: 'SAU9999', state: '', desc: 'equên', since: 'inidas ' },
    { start: 'SAV0001', end: 'SAV9999', state: '', desc: 'ão Paulo (estado)|São Paulo]] (SP) 2º sequência', since: '09/2009' },
];
exports.PLACAS_INVALID = { start: 'SAW0001', end: 'ZZZ9999' }; // || Sequências ainda não definidas
function validate_placa(placa) {
    var placaClean = placa.toString();
    placaClean = placaClean.replace(/-/g, '').toUpperCase();
    var exp = /[A-Za-z]{3}\-\d{4}/;
    var expClean = /[A-Za-z]{3}\d{4}/;
    // const letters = placa.substr(0, 3).toUpperCase();
    var placaString = placa.toString();
    if (!exp.test(placaString) && !expClean.test(placaClean)) {
        return false;
    }
    var found = placaString >= exports.PLACAS_INVALID.start && placaString <= exports.PLACAS_INVALID.end;
    if (found) {
        return false;
    }
    else {
        return true;
    }
}
exports.validate_placa = validate_placa;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isArray(value) {
    return (Array.isArray && Array.isArray(value)) || value instanceof Array;
}
exports.isArray = isArray;
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value); // && value.length === undefined
}
exports.isNumber = isNumber;
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
exports.isNil = isNil;
var strCaretTrap = '[]';
function processCaretTraps(mask) {
    var indexes = [];
    var indexOfCaretTrap;
    while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
        indexes.push(indexOfCaretTrap);
        mask.splice(indexOfCaretTrap, 1);
    }
    return { maskWithoutCaretTraps: mask, indexes: indexes };
}
exports.processCaretTraps = processCaretTraps;
exports.modulo11 = function (string, size, mod) {
    var soma = 0;
    for (var i = 1; i <= size; i++) {
        // tslint:disable-next-line:radix
        soma = soma + parseInt(string.substring(i - 1, i)) * (mod - i);
    }
    var resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    return resto;
};
/**
 *
 * @param input
 * ^ - Match line start
  (\d) - match first digit and capture it in back reference #1 i.e. \1
  (?!..) is a negative lookahead
  (?!\1+$) means disallow the match if first digit is followed by same digit (captured group) till end.
  \d{11}$ match next 11 digit followed by line end
 */
function allNumbersAreSame(inputValue) {
    var input = getAllDigits(inputValue);
    if (typeof input === 'string') {
        var reg = new RegExp('^(\\d)(?!\\1+$)\\d{' + (input.length - 1) + '}$');
        return reg.test(input);
    }
    return false;
}
exports.allNumbersAreSame = allNumbersAreSame;
function getAllDigits(input) {
    var match = input.match(/\d/g);
    if (match) {
        return match.join("");
    }
    return '';
}
exports.getAllDigits = getAllDigits;
function currencyToNumber(input) {
    input = input.replace(/ /g, '');
    if (input.indexOf('$') !== -1) {
        var vals = input.split('$');
        input = vals[1];
    }
    input = input.replace('%', '');
    input = input.replace(/\./g, '').replace(',', '.');
    return parseFloat(input);
}
exports.currencyToNumber = currencyToNumber;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
var placa_1 = require("./placa");
// http://www.geradorcnpj.com/javascript-validar-cnpj.htm
/*
//if (val.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/) != null) {
*/
function validate_cnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    var tamanho = cnpj.length - 2;
    var digitos = cnpj.substring(tamanho);
    var resultados = create_cnpj(cnpj);
    if (resultados[0] !== parseInt(digitos.charAt(0), 10)) {
        return false;
    }
    if (resultados[1] !== parseInt(digitos.charAt(1), 10)) {
        return false;
    }
    return true;
}
exports.validate_cnpj = validate_cnpj;
function create_cnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj === '') {
        return false;
    }
    if (cnpj.length !== 14) {
        return false;
    }
    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }
    // Valida DVs
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var resultados = [0, 0];
    resultados[0] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultados[1] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultados;
}
exports.create_cnpj = create_cnpj;
// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
function validate_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF.length !== 11) {
        return false;
    }
    var restos = create_cpf(strCPF);
    if (restos[0] !== parseInt(strCPF.substring(9, 10), 10)) {
        return false;
    }
    if (restos[1] !== parseInt(strCPF.substring(10, 11), 10)) {
        return false;
    }
    return true;
}
exports.validate_cpf = validate_cpf;
function create_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF === '00000000000') {
        return false;
    }
    var restos = [
        utils_1.modulo11(strCPF, 9, 11),
        utils_1.modulo11(strCPF, 10, 12)
    ];
    return restos;
}
exports.create_cpf = create_cpf;
exports.CEPRange = {
    'SP': /^([1][0-9]{3}|[01][0-9]{4})[0-9]{3}$/g,
    'RJ': /^[2][0-8][0-9]{3}[0-9]{3}$/g,
    'MS': /^[7][9][0-9]{3}[0-9]{3}$/g,
    'MG': /^[3][0-9]{4}[0-9]{3}$/g,
    'MT': /^[7][8][8][0-9]{2}[0-9]{3}$/g,
    'AC': /^[6][9]{2}[0-9]{2}[0-9]{3}$/g,
    'AL': /^[5][7][0-9]{3}[0-9]{3}$/g,
    'AM': /^[6][9][0-8][0-9]{2}[0-9]{3}$/g,
    'AP': /^[6][89][9][0-9]{2}[0-9]{3}$/g,
    'BA': /^[4][0-8][0-9]{3}[0-9]{3}$/g,
    'CE': /^[6][0-3][0-9]{3}[0-9]{3}$/g,
    'DF': /^[7][0-3][0-6][0-9]{2}[0-9]{3}$/g,
    'ES': /^[2][9][0-9]{3}[0-9]{3}$/g,
    'GO': /^[7][3-6][7-9][0-9]{2}[0-9]{3}$/g,
    'MA': /^[6][5][0-9]{3}[0-9]{3}$/g,
    'PA': /^[6][6-8][0-8][0-9]{2}[0-9]{3}$/g,
    'PB': /^[5][8][0-9]{3}[0-9]{3}$/g,
    'PE': /^[5][0-6][0-9]{2}[0-9]{3}$/g,
    'PI': /^[6][4][0-9]{3}[0-9]{3}$/g,
    'PR': /^[8][0-7][0-9]{3}[0-9]{3}$/g,
    'RN': /^[5][9][0-9]{3}[0-9]{3}$/g,
    'RO': /^[7][8][9][0-9]{2}[0-9]{3}$/g,
    'RR': /^[6][9][3][0-9]{2}[0-9]{3}$/g,
    'RS': /^[9][0-9]{4}[0-9]{3}$/g,
    'SC': /^[8][89][0-9]{3}[0-9]{3}$/g,
    'SE': /^[4][9][0-9]{3}[0-9]{3}$/g,
    'TO': /^[7][7][0-9]{3}[0-9]{3}$/g,
};
function valida_cep(cep) {
    var cepClean = cep.replace(/[^\d]+/g, '');
    var exp = /\d{2}\.\d{3}\-\d{3}/;
    if (!exp.test(cep) && cepClean.length !== 8) {
        return false;
    }
    return true;
}
exports.valida_cep = valida_cep;
function cep_ranges(cep) {
    cep = (cep.toString()).replace(/[^\d]+/g, '');
    cep = parseInt(cep, 10);
    var cepString = cep.toString();
    var keys = Object.keys(exports.CEPRange);
    var found;
    for (var i = void 0; i < keys.length; i++) {
        var estado = keys[i];
        var r = new RegExp(exports.CEPRange[estado]).test(cepString);
        if (r) {
            found = r;
            i = keys.length;
        }
    }
    if (!found) {
        return false;
    }
    return true;
}
exports.cep_ranges = cep_ranges;
function validate_telefone(tel) {
    var telClean = tel.replace(/[^\d]+/g, '');
    tel = tel.replace(/_/g, '');
    if (!(telClean.length === 10 || telClean.length === 11)) {
        return false;
    }
    if (telClean[0] == 0 || telClean[2] == 0) {
        return false;
    }
    return true;
}
exports.validate_telefone = validate_telefone;
function validate_celular(cel) {
    var celClean = cel.replace(/[^\d]+/g, '');
    celClean = celClean.replace(/_/g, '');
    if (celClean.length !== 11) {
        return false;
    }
    if (celClean[0] == 0 || celClean[2] < 5) {
        return false;
    }
    return true;
}
exports.validate_celular = validate_celular;
function validate_rg(rg) {
    var rgClean = rg.replace(/\./g, '');
    rgClean = rgClean.replace(/-/g, '');
    var exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
    var expClean = /[a-z]{2}\d{8}/;
    var state = rg.substr(0, 2).toUpperCase();
    if (!exp.test(rg) && !expClean.test(rgClean) && !(state in exports.CEPRange)) {
        return false;
    }
    return true;
}
exports.validate_rg = validate_rg;
function validate_time(time) {
    var expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    var value = time.toString();
    return expression.test(value);
}
exports.validate_time = validate_time;
function validate_currency(currency) {
    if (typeof currency === 'number') {
        return true;
    }
    var regex = /^(R\$|R\$ )?((\d{1,3})(?:.[0-9]{3}){0,1}|(\d{1})(?:.[0-9]{3}){0,2}|(\d{1,7}))(\,\d{1,2})?$/g;
    return regex.test(currency);
}
exports.validate_currency = validate_currency;
function validate_pispasep(number) {
    var regex = /^\d{3}\.\d{5}\.\d{2}\-\d{1}$/;
    return regex.test(number);
}
exports.validate_pispasep = validate_pispasep;
function validate_number(number) {
    var regex = /^\d+(?:\.\d{0,2})$/;
    return regex.test(number);
}
exports.validate_number = validate_number;
function validate_percentage(percentage) {
    var regex = /^\d+(?:\.\d{0,2})$/;
    return regex.test(percentage);
}
exports.validate_percentage = validate_percentage;
function validate_titulo(titulo) {
    var tituloClean = titulo.replace(/\./g, '');
    var exp = /\d{4}\.\d{4}\.\d{4}/;
    var expClean = /\d{4}\d{4}\d{4}/;
    if (!exp.test(tituloClean) && !expClean.test(tituloClean)) {
        return false;
    }
    return validaTituloVerificador(titulo);
}
exports.validate_titulo = validate_titulo;
function validaTituloVerificador(titulo) {
    var _a = create_titulo(titulo), dig1 = _a.dig1, dig2 = _a.dig2;
    var tam = titulo.length;
    var digitos = titulo.substr(tam - 2, 2);
    if ((digitos.charCodeAt(0) - 48 === dig1) && (digitos.charCodeAt(1) - 48 === dig2)) {
        return true;
    }
    else {
        return false;
    }
}
function create_titulo(titulo) {
    var tit = titulo;
    var dig1 = 0;
    var dig2 = 0;
    var tam = tit.length;
    var estado = tit.substr(tam - 4, 2);
    titulo = tit.substr(0, tam - 2);
    titulo = '000000000000' + titulo;
    titulo = titulo.substr(titulo.length - 11, titulo.length - 1);
    var exce = (estado === '01') || (estado === '02');
    dig1 = (titulo.charCodeAt(0) - 48) * 2 + (titulo.charCodeAt(1) - 48) * 9 + (titulo.charCodeAt(2) - 48) * 8 +
        (titulo.charCodeAt(3) - 48) * 7 + (titulo.charCodeAt(4) - 48) * 6 + (titulo.charCodeAt(5) - 48) * 5 +
        (titulo.charCodeAt(6) - 48) * 4 + (titulo.charCodeAt(7) - 48) * 3 + (titulo.charCodeAt(8) - 48) * 2;
    var resto = (dig1 % 11);
    if (resto === 0) {
        if (exce) {
            dig1 = 1;
        }
        else {
            dig1 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig1 = 0;
        }
        else {
            dig1 = 11 - resto;
        }
    }
    dig2 = (titulo.charCodeAt(9) - 48) * 4 + (titulo.charCodeAt(10) - 48) * 3 + dig1 * 2;
    resto = (dig2 % 11);
    if (resto === 0) {
        if (exce) {
            dig2 = 1;
        }
        else {
            dig2 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig2 = 0;
        }
        else {
            dig2 = 11 - resto;
        }
    }
    return { dig1: dig1, dig2: dig2 };
}
exports.create_titulo = create_titulo;
function validate_processo(processo) {
    var processoClean = processo.replace(/\./g, '');
    processoClean = processoClean.replace(/\-/g, '');
    var exp = /\d{7}\-\d{2}\.\d{4}\.\d{3}\.\d{4}/;
    var expClean = /\d{7}\d{4}\d{4}/;
    if (!exp.test(processoClean) && !expClean.test(processoClean)) {
        return false;
    }
    return true;
}
exports.validate_processo = validate_processo;
function validate_renavam(renavam) {
    var renavamClean = renavam.replace(/\./g, '');
    renavamClean = renavamClean.replace(/\-/g, '');
    var dv = create_renavam(renavam);
    var tam = renavam.length;
    var digitos = renavam.substr(tam - 1, 1);
    if (digitos.charCodeAt(0) - 48 === dv) {
        return true;
    }
    else {
        return false;
    }
}
exports.validate_renavam = validate_renavam;
function create_renavam(renavam) {
    var dig1 = 0;
    while (renavam.length < 11) {
        renavam = '0' + renavam;
    }
    dig1 = (renavam.charCodeAt(0) - 48) * 3 + (renavam.charCodeAt(1) - 48) * 2 + (renavam.charCodeAt(2) - 48) * 9 + (renavam.charCodeAt(3) - 48) * 8 +
        (renavam.charCodeAt(4) - 48) * 7 + (renavam.charCodeAt(5) - 48) * 6 + (renavam.charCodeAt(6) - 48) * 5 +
        (renavam.charCodeAt(7) - 48) * 4 + (renavam.charCodeAt(8) - 48) * 3 + (renavam.charCodeAt(9) - 48) * 2;
    dig1 = dig1 * 10;
    var resto = (dig1 % 11);
    if (resto === 10) {
        return 0;
    }
    else {
        return resto;
    }
}
exports.create_renavam = create_renavam;
exports.validateBr = {
    cep: valida_cep,
    celular: validate_celular,
    cnpj: validate_cnpj,
    cpf: validate_cpf,
    currency: validate_currency,
    number: validate_number,
    inscricaoestadual: inscricaoestadual_1.validar,
    percentage: validate_percentage,
    pispasep: validate_pispasep,
    placa: placa_1.validate_placa,
    processo: validate_processo,
    renavam: validate_renavam,
    rg: validate_rg,
    telefone: validate_telefone,
    time: validate_time,
    titulo: validate_titulo
};

},{"./inscricaoestadual":7,"./placa":9,"./utils":10}],12:[function(require,module,exports){
/* eslint indent: ["warn", 4] */


// Private helper class
class SubRange {
    constructor(low, high) {
        this.low = low;
        this.high = high;
        this.length = 1 + high - low;
    }

    overlaps(range) {
        return !(this.high < range.low || this.low > range.high);
    }

    touches(range) {
        return !(this.high + 1 < range.low || this.low - 1 > range.high);
    }

    // Returns inclusive combination of SubRanges as a SubRange.
    add(range) {
        return new SubRange(
            Math.min(this.low, range.low),
            Math.max(this.high, range.high)
        );
    }

    // Returns subtraction of SubRanges as an array of SubRanges.
    // (There's a case where subtraction divides it in 2)
    subtract(range) {
        if (range.low <= this.low && range.high >= this.high) {
            return [];
        } else if (range.low > this.low && range.high < this.high) {
            return [
                new SubRange(this.low, range.low - 1),
                new SubRange(range.high + 1, this.high)
            ];
        } else if (range.low <= this.low) {
            return [new SubRange(range.high + 1, this.high)];
        } else {
            return [new SubRange(this.low, range.low - 1)];
        }
    }

    toString() {
        return this.low == this.high ?
            this.low.toString() : this.low + '-' + this.high;
    }
}

class DRange {
    constructor(a, b) {
        this.ranges = [];
        this.length = 0;
        if (a != null) this.add(a, b);
    }

    _update_length() {
        this.length = this.ranges.reduce((previous, range) => {
            return previous + range.length;
        }, 0);
    }

    add(a, b) {
        const _add = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.touches(this.ranges[i])) {
                i++;
            }
            const newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.touches(this.ranges[i])) {
                subrange = subrange.add(this.ranges[i]);
                i++;
            }
            newRanges.push(subrange);
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_add);
        } else {
            if (b == null) b = a;
            _add(new SubRange(a, b));
        }
        return this;
    }

    subtract(a, b) {
        const _subtract = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            let newRanges = this.ranges.slice(0, i);
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                newRanges = newRanges.concat(this.ranges[i].subtract(subrange));
                i++;
            }
            this.ranges = newRanges.concat(this.ranges.slice(i));
            this._update_length();
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_subtract);
        } else {
            if (b == null) b = a;
            _subtract(new SubRange(a, b));
        }
        return this;
    }

    intersect(a, b) {
        const newRanges = [];
        const _intersect = (subrange) => {
            let i = 0;
            while (i < this.ranges.length && !subrange.overlaps(this.ranges[i])) {
                i++;
            }
            while (i < this.ranges.length && subrange.overlaps(this.ranges[i])) {
                let low = Math.max(this.ranges[i].low, subrange.low);
                let high = Math.min(this.ranges[i].high, subrange.high);
                newRanges.push(new SubRange(low, high));
                i++;
            }
        };

        if (a instanceof DRange) {
            a.ranges.forEach(_intersect);
        } else {
            if (b == null) b = a;
            _intersect(new SubRange(a, b));
        }
        this.ranges = newRanges;
        this._update_length();
        return this;
    }

    index(index) {
        let i = 0;
        while (i < this.ranges.length && this.ranges[i].length <= index) {
            index -= this.ranges[i].length;
            i++;
        }
        return this.ranges[i].low + index;
    }

    toString() {
        return '[ ' + this.ranges.join(', ') + ' ]';
    }

    clone() {
        return new DRange(this);
    }

    numbers() {
        return this.ranges.reduce((result, subrange) => {
            let i = subrange.low;
            while (i <= subrange.high) {
                result.push(i);
                i++;
            }
            return result;
        }, []);
    }

    subranges() {
        return this.ranges.map((subrange) => ({
            low: subrange.low,
            high: subrange.high,
            length: 1 + subrange.high - subrange.low
        }));
    }
}

module.exports = DRange;

},{}],13:[function(require,module,exports){
const ret    = require('ret');
const DRange = require('drange');
const types  = ret.types;


module.exports = class RandExp {
  /**
   * @constructor
   * @param {RegExp|String} regexp
   * @param {String} m
   */
  constructor(regexp, m) {
    this._setDefaults(regexp);
    if (regexp instanceof RegExp) {
      this.ignoreCase = regexp.ignoreCase;
      this.multiline = regexp.multiline;
      regexp = regexp.source;

    } else if (typeof regexp === 'string') {
      this.ignoreCase = m && m.indexOf('i') !== -1;
      this.multiline = m && m.indexOf('m') !== -1;
    } else {
      throw new Error('Expected a regexp or string');
    }

    this.tokens = ret(regexp);
  }


  /**
   * Checks if some custom properties have been set for this regexp.
   *
   * @param {RandExp} randexp
   * @param {RegExp} regexp
   */
  _setDefaults(regexp) {
    // When a repetitional token has its max set to Infinite,
    // randexp won't actually generate a random amount between min and Infinite
    // instead it will see Infinite as min + 100.
    this.max = regexp.max != null ? regexp.max :
      RandExp.prototype.max != null ? RandExp.prototype.max : 100;

    // This allows expanding to include additional characters
    // for instance: RandExp.defaultRange.add(0, 65535);
    this.defaultRange = regexp.defaultRange ?
      regexp.defaultRange : this.defaultRange.clone();

    if (regexp.randInt) {
      this.randInt = regexp.randInt;
    }
  }


  /**
   * Generates the random string.
   *
   * @return {String}
   */
  gen() {
    return this._gen(this.tokens, []);
  }


  /**
   * Generate random string modeled after given tokens.
   *
   * @param {Object} token
   * @param {Array.<String>} groups
   * @return {String}
   */
  _gen(token, groups) {
    var stack, str, n, i, l;

    switch (token.type) {
      case types.ROOT:
      case types.GROUP:
        // Ignore lookaheads for now.
        if (token.followedBy || token.notFollowedBy) { return ''; }

        // Insert placeholder until group string is generated.
        if (token.remember && token.groupNumber === undefined) {
          token.groupNumber = groups.push(null) - 1;
        }

        stack = token.options ?
          this._randSelect(token.options) : token.stack;

        str = '';
        for (i = 0, l = stack.length; i < l; i++) {
          str += this._gen(stack[i], groups);
        }

        if (token.remember) {
          groups[token.groupNumber] = str;
        }
        return str;

      case types.POSITION:
        // Do nothing for now.
        return '';

      case types.SET:
        var expandedSet = this._expand(token);
        if (!expandedSet.length) { return ''; }
        return String.fromCharCode(this._randSelect(expandedSet));

      case types.REPETITION:
        // Randomly generate number between min and max.
        n = this.randInt(token.min,
          token.max === Infinity ? token.min + this.max : token.max);

        str = '';
        for (i = 0; i < n; i++) {
          str += this._gen(token.value, groups);
        }

        return str;

      case types.REFERENCE:
        return groups[token.value - 1] || '';

      case types.CHAR:
        var code = this.ignoreCase && this._randBool() ?
          this._toOtherCase(token.value) : token.value;
        return String.fromCharCode(code);
    }
  }


  /**
   * If code is alphabetic, converts to other case.
   * If not alphabetic, returns back code.
   *
   * @param {Number} code
   * @return {Number}
   */
  _toOtherCase(code) {
    return code + (97 <= code && code <= 122 ? -32 :
      65 <= code && code <= 90  ?  32 : 0);
  }


  /**
   * Randomly returns a true or false value.
   *
   * @return {Boolean}
   */
  _randBool() {
    return !this.randInt(0, 1);
  }


  /**
   * Randomly selects and returns a value from the array.
   *
   * @param {Array.<Object>} arr
   * @return {Object}
   */
  _randSelect(arr) {
    if (arr instanceof DRange) {
      return arr.index(this.randInt(0, arr.length - 1));
    }
    return arr[this.randInt(0, arr.length - 1)];
  }


  /**
   * expands a token to a DiscontinuousRange of characters which has a
   * length and an index function (for random selecting)
   *
   * @param {Object} token
   * @return {DiscontinuousRange}
   */
  _expand(token) {
    if (token.type === ret.types.CHAR) {
      return new DRange(token.value);
    } else if (token.type === ret.types.RANGE) {
      return new DRange(token.from, token.to);
    } else {
      let drange = new DRange();
      for (let i = 0; i < token.set.length; i++) {
        let subrange = this._expand(token.set[i]);
        drange.add(subrange);
        if (this.ignoreCase) {
          for (let j = 0; j < subrange.length; j++) {
            let code = subrange.index(j);
            let otherCaseCode = this._toOtherCase(code);
            if (code !== otherCaseCode) {
              drange.add(otherCaseCode);
            }
          }
        }
      }
      if (token.not) {
        return this.defaultRange.clone().subtract(drange);
      } else {
        return this.defaultRange.clone().intersect(drange);
      }
    }
  }


  /**
   * Randomly generates and returns a number between a and b (inclusive).
   *
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   */
  randInt(a, b) {
    return a + Math.floor(Math.random() * (1 + b - a));
  }


  /**
   * Default range of characters to generate from.
   */
  get defaultRange() {
    return this._range = this._range || new DRange(32, 126);
  }

  set defaultRange(range) {
    this._range = range;
  }


  /**
   *
   * Enables use of randexp with a shorter call.
   *
   * @param {RegExp|String| regexp}
   * @param {String} m
   * @return {String}
   */
  static randexp(regexp, m) {
    var randexp;
    if(typeof regexp === 'string') {
      regexp = new RegExp(regexp, m);
    }

    if (regexp._randexp === undefined) {
      randexp = new RandExp(regexp, m);
      regexp._randexp = randexp;
    } else {
      randexp = regexp._randexp;
      randexp._setDefaults(regexp);
    }
    return randexp.gen();
  }


  /**
   * Enables sugary /regexp/.gen syntax.
   */
  static sugar() {
    /* eshint freeze:false */
    RegExp.prototype.gen = function() {
      return RandExp.randexp(this);
    };
  }
};

},{"drange":12,"ret":14}],14:[function(require,module,exports){
const util      = require('./util');
const types     = require('./types');
const sets      = require('./sets');
const positions = require('./positions');


module.exports = (regexpStr) => {
  var i = 0, l, c,
    start = { type: types.ROOT, stack: []},

    // Keep track of last clause/group and stack.
    lastGroup = start,
    last = start.stack,
    groupStack = [];


  var repeatErr = (i) => {
    util.error(regexpStr, `Nothing to repeat at column ${i - 1}`);
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];

    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];

        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;

          case 'B':
            last.push(positions.nonWordBoundary());
            break;

          case 'w':
            last.push(sets.words());
            break;

          case 'W':
            last.push(sets.notWords());
            break;

          case 'd':
            last.push(sets.ints());
            break;

          case 'D':
            last.push(sets.notInts());
            break;

          case 's':
            last.push(sets.whitespace());
            break;

          case 'S':
            last.push(sets.notWhitespace());
            break;

          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

            // Escaped character.
            } else {
              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
            }
        }

        break;


      // Positionals.
      case '^':
        last.push(positions.begin());
        break;

      case '$':
        last.push(positions.end());
        break;


      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not,
        });

        break;


      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;


      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true,
        };

        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

          // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;

          } else if (c !== ':') {
            util.error(regexpStr,
              `Invalid group, character '${c}'` +
              ` after '?' at column ${i - 1}`);
          }

          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;


      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, `Unmatched ) at column ${i - 1}`);
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ?
          lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;


      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;


      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)), min, max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;

          last.push({
            type: types.REPETITION,
            min,
            max,
            value: last.pop(),
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123,
          });
        }
        break;

      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop(),
        });
        break;

      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop(),
        });
        break;

      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop(),
        });
        break;


      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0),
        });
    }

  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }

  return start;
};

module.exports.types = types;

},{"./positions":15,"./sets":16,"./types":17,"./util":18}],15:[function(require,module,exports){
const types = require('./types');
exports.wordBoundary = () => ({ type: types.POSITION, value: 'b' });
exports.nonWordBoundary = () => ({ type: types.POSITION, value: 'B' });
exports.begin = () => ({ type: types.POSITION, value: '^' });
exports.end = () => ({ type: types.POSITION, value: '$' });

},{"./types":17}],16:[function(require,module,exports){
const types = require('./types');

const INTS = () => [{ type: types.RANGE , from: 48, to: 57 }];

const WORDS = () => {
  return [
    { type: types.CHAR, value: 95 },
    { type: types.RANGE, from: 97, to: 122 },
    { type: types.RANGE, from: 65, to: 90 }
  ].concat(INTS());
};

const WHITESPACE = () => {
  return [
    { type: types.CHAR, value: 9 },
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 11 },
    { type: types.CHAR, value: 12 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 32 },
    { type: types.CHAR, value: 160 },
    { type: types.CHAR, value: 5760 },
    { type: types.RANGE, from: 8192, to: 8202 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
    { type: types.CHAR, value: 8239 },
    { type: types.CHAR, value: 8287 },
    { type: types.CHAR, value: 12288 },
    { type: types.CHAR, value: 65279 }
  ];
};

const NOTANYCHAR = () => {
  return [
    { type: types.CHAR, value: 10 },
    { type: types.CHAR, value: 13 },
    { type: types.CHAR, value: 8232 },
    { type: types.CHAR, value: 8233 },
  ];
};

// Predefined class objects.
exports.words = () => ({ type: types.SET, set: WORDS(), not: false });
exports.notWords = () => ({ type: types.SET, set: WORDS(), not: true });
exports.ints = () => ({ type: types.SET, set: INTS(), not: false });
exports.notInts = () => ({ type: types.SET, set: INTS(), not: true });
exports.whitespace = () => ({ type: types.SET, set: WHITESPACE(), not: false });
exports.notWhitespace = () => ({ type: types.SET, set: WHITESPACE(), not: true });
exports.anyChar = () => ({ type: types.SET, set: NOTANYCHAR(), not: true });

},{"./types":17}],17:[function(require,module,exports){
module.exports = {
  ROOT       : 0,
  GROUP      : 1,
  POSITION   : 2,
  SET        : 3,
  RANGE      : 4,
  REPETITION : 5,
  REFERENCE  : 6,
  CHAR       : 7,
};

},{}],18:[function(require,module,exports){
const types = require('./types');
const sets  = require('./sets');


const CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
const SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function(str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function(s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }

    var code = b ? 8 :
      a16   ? parseInt(a16, 16) :
      b16   ? parseInt(b16, 16) :
      c8    ? parseInt(c8,   8) :
      dctrl ? CTRL.indexOf(dctrl) :
      SLSH[eslsh];

    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[[\]{}^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }

    return c;
  });

  return str;
};


/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = (str, regexpStr) => {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
  var rs, c;


  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());

    } else if (rs[2]) {
      tokens.push(sets.ints());

    } else if (rs[3]) {
      tokens.push(sets.whitespace());

    } else if (rs[4]) {
      tokens.push(sets.notWords());

    } else if (rs[5]) {
      tokens.push(sets.notInts());

    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());

    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
        to: rs[10].charCodeAt(0),
      });

    } else if ((c = rs[12])) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0),
      });

    } else {
      return [tokens, regexp.lastIndex];
    }
  }

  exports.error(regexpStr, 'Unterminated character class');
};


/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = (regexp, msg) => {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};

},{"./sets":16,"./types":17}],19:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});
},{}]},{},[1])(1)
});