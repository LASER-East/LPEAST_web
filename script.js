document.addEventListener('DOMContentLoaded', function() {
    const sectionsGrade7 = [
        { name: "BLESSEDNESS", link: "https://depedph-my.sharepoint.com/:x:/r/personal/305434_deped_gov_ph/_layouts/15/Doc.aspx?sourcedoc=%7B50BD7A09-2514-4700-91D0-F65B3669D266%7D&file=Grade%207%20-%201.xlsx&action=default&mobileredirect=true" },
        { name: "BENEVOLENCE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EYdL2msjY49PmyBkOuG3_WUBQ_eb7t0eoOoVoVe6Wn9-Hw?e=wrIWYJ" },
        { name: "BRAVERY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EbU-eAHslyhAjgneg2w4yr0B7kJ1AyDocQWuGvyLK12J9A?e=QHf6Q5" },
        { name: "CONSERVATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EaiTDzmzPo5OgYmSaSBCGhcBKBw67s3ri2S6H9V3oPujoA?e=6bDfmW" },
        { name: "ACCOUNTABILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EfY6A0gbmKhJmrGT9_TU8tEBUHNAoqgsO2fGLVRUcA_Drw?e=tZcBOj" },
        { name: "ADAPTABILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EWyJZKv4A-pLtqp_W_pTgzcB8lX0xjXm8-WmFTPD94D9yw?e=EOwnBE" },
        { name: "ADMIRABILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EaiRiragslxLuyKJ2KQrpz8Badxx2zkZ2MGKkUWM3qJLMQ?e=xepSD1" },
        { name: "ALTRUISM", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EeOmUmZrabhNr8ZlX8sQL5QBBncTCFbcn-Qes74fl8KJLw?e=lgMbJc" },
        { name: "APPRECIATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EWVL_UpYqdFMgug0NfwLkKQBRQ82XdP4L6V4k6W0h2zI9g?e=vLmTcv" },
        { name: "APPROACHABILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EZ2lQJGkgCBGobbEK35QGRkBLUwr8-44_ATFpk5Q_PRBrQ?e=Np6ui4" },
        { name: "AUSTERITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EUtin-3WDvtDteWgPGFpgNMBKya9e9e8JaHguDxhhPHSmQ?e=AucqnM" },
        { name: "AUTHENTICITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQOGXLs7Z5lMhPiJYI1Eex8BqJNPHWcBfe2s2Nq-c8eKEg?e=nuoH5Z" },
        { name: "CALMNESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVx5E7y5L9lFk39KcimHihMB__YhauARxCr9pj6fqmczZA?e=DT7kR3" },
        { name: "CAMARADERIE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Edw25h0TmPxNoN0mTAdsiggB4YnHXMc-BEbV8Ni4jezrMA?e=E98vZK" },
        { name: "CARING", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EcaYRf3BN1lHrWXGkJxV7AEBVzCxAk_SFDdksW23jzplVQ?e=yzp2Z9" },
        { name: "CATALYST", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Ebnb1FEwfvZGohxqV_jwzxIBs6M2kYr84cxZlsQ5XRpmZw?e=Ppfy7E" },
        { name: "CHAMPION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ETfBsU8XZ7pAtaGCxER_7pgBmoqgs-GSGa-dRFmToKVvEw?e=iUhSuJ" },
        { name: "OHSP", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVnFJ3Y-hb9PpoQrjVhN_t8B4Jas3ooaz7pnTZz5lgwmyA?e=Ipz6fq" },
        // Add more sections here
    ];
    const sectionsGrade8 = [
        { name: "CONNECTION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Ed1JONk9aq9NkiUtYMiBABkBZpiq_rGGNQ5_Lf1V-pArzQ?e=w3c3Ul" },
        { name: "CONSIDERATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQZTpQltUOFBsNy7AE_I9F0BSpBSkWbDD7ZAwXhOW0dWGA?e=l0VPgz" },
        { name: "CONSISTENCY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVxq_kBmUtdEh8NL6AmUFHsBDB9A5PObgn-JuFQWnHB9Dg?e=L0tfFZ" },
        { name: "CONTENTMENT", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVWKqXa7rvdBvEptA_hFooEBU2DSNuSYF-oC30xMrj_GTg?e=jiBVPq" },
        { name: "COOPERATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Ecit6B_N-PdDmGA6T5eddPEB5LyE7VJtHy4eKa5ycFZBjw?e=6JeEnb" },
        { name: "COURAGE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EXYQs303wdVIp2Pkc85HZf8BMwhsNOzdbAETMyFzdhXe5A?e=8E1cb0" },
        { name: "CREATIVITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EcZbDjrAO5RPrJSukY2mpqsB92V3eepwj2ne7BcYbqUUfQ?e=ulgksD" },
        { name: "CLEVER", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ESSlFdCb5JdOqEy--IDvFeYBMfptKCefXtBQVEsXaR38OQ?e=f55bbx" },
        { name: "DEPENDABILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EdPJoS-cEzlLj4DfqpISFGQBhsm6WmCGxHAsGN_ozuXtKw?e=IzROKh" },
        { name: "DISCERNMENT", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQ3AAOngnAlMk2PrG5cACVEBGIpVyQ8DZ9sEUpz3b_VVcg?e=3kBaHq" },
        { name: "DETERMINATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EcEH_AhAGudMg4wnKDkHySoBbS7iNtCvsEqTZ6KxgrOzXQ?e=5LFL2F" },
        { name: "DIGNITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQDHhInVHBtCgQrnqPy5-CcBrJ4wouIRjx9j70kqEtP6Fw?e=GwlzRz" },
        { name: "DIPLOMACY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EZ2r6vlsRx9LvwSd7ocbuMwBe9G4NOmpOpeoHaW7IOhMew?e=aGbA9z" },
        { name: "DISCIPLINE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EY3cMGIrBxpMsbF3VjrroHgBQN1pO6OpoiYlu6in5LOxww?e=sh4eQf" },
        { name: "DIVERSITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EXfzjePxyaFKjx3_bhps6AwBZK08R-yzFuzMOO8khiEFjg?e=8fKhQY" },
        { name: "EFFULGENCE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EU_0DbjWechCk2BMgfvLM5EBWbnJ_640G6zRqmnkwBUfAA?e=bFg3qU" },
        { name: "EFFICIENCY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQ2tL4Spe8BGiLrnj-WIlxcBA6wOvQZcFvpB3ryTqGyNkw?e=VrAsmv" },
        { name: "OHSP", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Efl-KiQcL05OgHtQah2TkfQBGCx83ogHIWnOqmOyutepdQ?e=203EKb" },
        // Add more sections here
    ];
    const sectionsGrade9 = [
        { name: "FAIRNESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EUbLg4n7fuxHmAF-wVGglBABK-TbPxSgVnwxULSNizNBvw?e=ojAYOv" },
        { name: "FAITH", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVHeYOKnl1pLtOmRCf3gjlkBKxLKXQCHl7RqAPWUIRAF2g?e=jgqawz" },
        { name: "FAMILY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ERc9qkQHgq1Duvzy5JCKg9UB8YyaZvibZyAJJDsASmEuYw?e=tocpj1" },
        { name: "FEARLESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ES5SX1VRmhJChdC2Y4MqDSwBeMwwQdO2hXSRVo1FQDaFgA?e=jQ5poM" },
        { name: "FIDELITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EYxl9CfqONFNpzAZ_xz1SyABPjeN5ATik0Hmifjk7e9JBg?e=zfe0Lx" },
        { name: "FLEXIBILITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ERHK1NILUuNAiLU6q_rCF0wBk-LYfhHJbwwQB5mUrAo8WQ?e=yGsSRi" },
        { name: "FORGIVENESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EdzX7HNTGL9PkrNynAmrZcgB7L-G6xF6lk8XUGnG_XNZgA?e=Eg3mAu" },
        { name: "FORTITUDE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EWkmG-FzurpPtcbu_6sklHoB4Q9ZqDXqGU0eNvwu4VcZEg?e=tA1mto" },
        { name: "FRIENDLINESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EX6YDspRJB9IsZyWH4rX2-8Bai5lSuR1WVQaOeopMsc7bw?e=cfjUdL" },
        { name: "FRUGALITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EfzluMdd-QpFtU4NfJkdDgEBZaZ3MNJ7uBnxK0dQKrwcng?e=RupHlp" },
        { name: "FULFILLMENT", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ETHAHT9mB_1FuOeEHd-U5WUBn4FbVHlrqrRVgjltyIzguw?e=r7Y60Y" },
        { name: "GENEROSITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EYYf4g2g05hFuR3renOtAacBWsx9CVjyFRXp4yc4zXOSUg?e=05PCJK" },
        { name: "GENTLENESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQIX6DX8GTZJngK33xD3GKUB__NF4VoKr3JGFF1Bm-crBA?e=MpUzqa" },
        { name: "GENUINENESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EXAWSADnkpBMnakbCww9SIkBwQnwRmwQtxDYk-WZoMqICA?e=nWJ88u" },
        { name: "GRACE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EVW8TsKp9ZBHjsFX-zoPVMkB92DgOFaY3k96drfd9YJO1A?e=r8TIus" },
        { name: "GRACIOUSNESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EYR459TcjGRKnWMw6Vml6UsBvWoRkgH7jpxkQaGXL3dOlA?e=z6z6KM" },
        { name: "GRATITUDE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQhJnhHHSMFNhUTxykS6M-YBfUNJXomJotuWMiaD9XCtLw?e=nNj3Sh" },
        { name: "OHSP", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQc7IsNRNQRMh-cltQwvJpoBGVrbZG8pKVlv1C1MREZvPw?e=obNTtT" },
        // Add more sections here
    ];
    const sectionsGrade10 = [
        { name: "COMMITMENT", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ETNYyquq0GtMkStpWH_JxZYBzQqwEjJA_VO2aDAylD2lJA?e=ukMPal" },
        { name: "ENVIRONMENTALIST", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EbsU4aOJACJBuZLuQs4DBoMBC11ok5IDf3HwtFKiA6NxFQ?e=krdamH" },
        { name: "IMAGINATIVE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Ebpu8gpNrZVOjF__nEFxz8oB-b01PIqAXLv2RYiMk5ewsA?e=C2Njd7" },
        { name: "INDEPENDENCE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EeEsT28onlFMgRtx7EA-YdwBvUmZ1VU2EVVfuN8BjKWqLg?e=CgU9BI" },
        { name: "INFLUENCE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EV6vqfMupeZIrBXIHTWD17IB_XsGdzxKwbhYHT8ATQJztQ?e=wLfhZm" },
        { name: "INNOVATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQkQdjO8ABdJpDY1u0RMPjMB8GqiULkw6AQX2QsG4Zol7A?e=9oJHwn" },
        { name: "INTEGRITY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQhhvDFAar5HmVxdGQGgCUkBGF2TrFp8V11uQLRn780iVQ?e=5h6yuc" },
        { name: "JOYFULNESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EalPf7crLYZOu_66xndrbLcBwpjHEwk8gKcq80cph4__pQ?e=JHWBr3" },
        { name: "JUSTICE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ESSfYEdAoNZDleEQrRkBUSsBhIaj_HVz1UUSeE1JeipntA?e=5yM2mQ" },
        { name: "KINDNESS", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EW1al3D7pShFnRJD0p5lZ00By4Zw0iSGnnPYa1DvC_o_ag?e=hhuRQa" },
        { name: "LEADERSHIP", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EQNslSnn3tpLkc6qvYEsfFcB1mHOPBI0j95Kwz358ZUsaw?e=w3aMhF" },
        { name: "LEARNING", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ETXCQ7gKBAVJv4TodwsabQcBlk0nFa-FRYBqayqntKz9YA?e=GQmwij" },
        { name: "LOVE", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EU07ysSjMTlLjXlNVO1vsC0BH3nyPoheoMKZX8fanDW82A?e=tLHxEz" },
        { name: "LOYALTY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ESvpctvq_FRDlt4ywL9CE_wBUFJDuwUhk04J-a-NcqnVbw?e=BxBeq0" },
        { name: "MODERATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Eaz0M9bz5a1OhWYasmQfOu4B_eteuow25VIkdytFqQ_qcg?e=LOMZaZ" },
        { name: "MODESTY", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/Ee6eSEhqMB9JvkBgX0VyqZEB_jSzQ7v0IASSAslgyZjVgA?e=FmDDev" },
        { name: "MOTIVATION", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/ETilKZtzVrBAr_u1N7hADUwBy7IHtnaq36Pnzq_fJQNQCQ?e=X9uCse" },
        { name: "OHSP", link: "https://depedph-my.sharepoint.com/:x:/g/personal/305434_deped_gov_ph/EZBn-KU7YA5Lo00UmOIW-6gBYvqmJvUU_2Zy8bEpd0Zc1w?e=U49f5p" },
        // Add more sections here
    ];

    populateSelect('grade7Select', sectionsGrade7);
    populateSelect('grade8Select', sectionsGrade8);
    populateSelect('grade9Select', sectionsGrade9);
    populateSelect('grade10Select', sectionsGrade10);
});

function populateSelect(selectId, sections) {
    const selectElement = document.getElementById(selectId);
    sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section.link;
        option.textContent = section.name;
        selectElement.appendChild(option);
    });
}

function displaySection(selectId, outputId) {
    const selectElement = document.getElementById(selectId);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const outputElement = document.getElementById(outputId);

    if (selectedOption.value) {
        outputElement.innerHTML = `You selected: <a href="${selectedOption.value}">${selectedOption.textContent}</a>`;
    }

}
