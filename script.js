// Global durum değişkenleri
let selectedClass = 0;
let selectedTerm = 0;

// Dark Mode Toggle Event Listener
// HTML'deki onclick="toggleDarkMode()" kaldırıldı, buradan yönetiliyor.
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Sayfa gösterme fonksiyonları (Mevcut haliyle gayet iyi)
function showClasses(cls) {
    selectedClass = cls;
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("classPage").classList.remove("hidden");
    document.getElementById("classTitle").innerText = cls + ". Sınıf";
}

function showTerms(term) {
    selectedTerm = term;
    document.getElementById("classPage").classList.add("hidden");
    document.getElementById("termPage").classList.remove("hidden");
    document.getElementById("termTitle").innerText = selectedClass + ". Sınıf " + term + ". Dönem";
    generateCourseButtons();
}

function goBack(page) {
    document.querySelectorAll(".container").forEach(el => el.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// *** GELİŞTİRİLMİŞ FONKSİYON ***
// courseData objesini kullanarak butonları oluşturur
function generateCourseButtons() {
    const courseButtonsContainer = document.getElementById("courseButtons");
    courseButtonsContainer.innerHTML = ""; // Önceki butonları temizle

    // Yeni courseData objesinden dersleri al
    // Opsiyonel zincirleme (?.) kullanarak hata oluşmasını engelle (örn: 4. sınıf 2. dönem yoksa)
    const lessons = courseData[selectedClass]?.[selectedTerm];

    if (lessons && lessons.length > 0) {
        lessons.forEach(course => {
            let btn = document.createElement("button");
            btn.innerText = course.name;

            if (course.link) {
                // Link varsa: Tıklama olayı ekle
                btn.onclick = function() {
                    window.open(course.link, "_blank");
                };
            } else {
                // Link yoksa: Butonu devre dışı bırak ve title ekle
                btn.disabled = true;
                btn.title = "Bu ders için link yakında eklenecek";
            }
            courseButtonsContainer.appendChild(btn);
        });
    } else {
        // O dönem için ders bulunamazsa
        courseButtonsContainer.innerHTML = "<p>Bu dönem için henüz ders eklenmemiş.</p>";
    }
}


// *** BİRLEŞTİRİLMİŞ VE GELİŞTİRİLMİŞ VERİ YAPISI ***
// 'courses' ve 'driveLinks' tek bir objede birleştirildi.
// link: null olanlar devre dışı buton olarak görünecek.
const courseData = {
    1: {
        1: [
            { name: "FİZİK I", link: "https://drive.google.com/drive/folders/1_IyMu_GHT9btBza7WMHNqIA2MQvvD60i?usp=sharing" }
        ],
        2: [
            { name: "MÜHENDİSLER İÇİN LİNEER CEBİR", link: "https://drive.google.com/drive/folders/1JsomDAfleEbkqCUXYFYf4uPgmT4yALJg?usp=sharing" },
            { name: "ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİNE GİRİŞ", link: "https://drive.google.com/drive/folders/1DL-ku1utJW2Te1BK6ozxS6ycbLD3pjB5?usp=sharing" },
            { name: "MATEMATİK-II", link: "https://drive.google.com/drive/folders/1nYd1nE1JfSOGIqYyQAVL0e6ud0Xd3d4q?usp=sharing" }
        ]
    },
    2: {
        1: [
            { name: "DEVRE ANALİZİ I", link: "https://drive.google.com/drive/folders/15jGk2-AKdMuNyA4e2apVSLN2WNkTXb4V?usp=sharing" },
            { name: "ELEKTRONİK ELEMANLAR", link: "https://drive.google.com/drive/folders/126fmp3pBkMZLD03TduYEtC15isZrQz8G?usp=sharing" },
            { name: "MÜHENDİSLİK MATEMATİĞİ I", link: "https://drive.google.com/drive/folders/177M36a6or3N8he5pjDPGRFYXP5MBeA-u?usp=sharing" },
            { name: "LOJİK DEVRELERE GİRİŞ", link: "https://drive.google.com/drive/folders/1WNyeYM48hosoAImTWq25a5MxzHcGBPaA?usp=sharing" },
            { name: "MÜHENDİSLER İÇİN OLASILIK TEORİSİ VE İSTATİSTİK", link: "https://drive.google.com/drive/folders/1YnjP-6wib9KIja0iNh6lWxGhOsRxoDU8?usp=sharing" },
            { name: "MÜHENDİSLİK İÇİN DİFERANSİYEL DENKLEMLER", link: "https://drive.google.com/drive/folders/1HoOrgrbw04uoMmzUbuaoRI3F9afOciw1?usp=sharing" },
            { name: "TEKNİK YABANCI DİL I", link: "https://drive.google.com/drive/folders/1JAwRgXQ1UoQoFAWB_6_pHyGKUkYvOzHP?usp=sharing" },
            { name: "ÖLÇME VE ANALİZ LABORATUARI", link: "https://drive.google.com/drive/folders/11Ihy2_sYlvT4Y8BDl2tanPWM01dB0lVM?usp=sharing" }
        ],
        2: [
            { name: "DEVRE ANALİZİ II", link: "https://drive.google.com/drive/folders/1E23LitUOAvpKyxPaL_ETWkDb-HBcK-W_?usp=sharing" },
            { name: "ELEKTRONİK DEVRELER I", link: "https://drive.google.com/drive/folders/16_-M6bRmuDiCEn097bwlmha7ko1Vok5G?usp=sharing" },
            { name: "SAYISAL ÇÖZÜMLEME", link: "https://drive.google.com/drive/folders/11Yn_DCzJGM408D44rhXN6svx28C1EQiK?usp=sharing" },
            { name: "LOJİK DEVRE TASARIMI", link: "https://drive.google.com/drive/folders/19cSvgjKLnkGjuRDcfnaQhgjCwLsugScX?usp=sharing" },
            { name: "MÜHENDİSLİK MATEMATİĞİ II", link: "https://drive.google.com/drive/folders/1--uGxAi9C-FfaTK0Q4QBOunUK0YKQTmj?usp=sharing" },
            { name: "TEKNİK YABANCI DİL II", link: null }, // Örnek: Link yok
            { name: "ELEKTRONİK DEVRE LABORATUARI I", link: "https://drive.google.com/drive/folders/1t4gAsYko7uV5n8H9-i1lhTx8HQf5291j?usp=sharing" },
            { name: "LOJİK LABORATUARI", link: "https://drive.google.com/drive/folders/1XyUKszXMGa-nqXY1NBbZsxUqIlnWZkza?usp=sharing" }
        ]
    },
    3: {
        1: [
            { name: "ELEKTRİK MAKİNALARI", link: "https://drive.google.com/drive/folders/14Aom9jT2kWhRg2SQg5-EXYwkAUTAh2fo?usp=sharing" },
            { name: "ELEKTRONİK DEVRELER II", link: "https://drive.google.com/drive/folders/15X3USaCech9BODPxy7FU65VzgQglcCl8?usp=sharing" },
            { name: "ELEKTRONİK DEVRE LABORATUARI II", link: "https://drive.google.com/drive/folders/1jH9Wyk7oR0_qggifvIDp_RkXGH-3iZ6z?usp=sharing" },
            { name: "MİKROİŞLEMCİLER", link: "https://drive.google.com/drive/folders/13BumMlKtseYsfuuKuuo5UGyapt2dT_ZV?usp=sharing" },
            { name: "ELEKTROMAGNETİK ALANLAR TEORİSİ", link: "https://drive.google.com/drive/folders/1x-GaSLwniwtXaxyjoTfTxuZtDGrguB_I?usp=sharing" },
            { name: "İŞARETLER VE SİSTEMLER", link: "https://drive.google.com/drive/folders/1-_gCpuCuiLkz8XxanIBFeXppDh41E7TF?usp=sharing" },
            { name: "BİLİM TEKNOLOJİ VE MÜHENDİSLİK", link: "https://drive.google.com/drive/folders/1GMambOB8YngdVHnMJG9qWnNNgh8EH9Dm?usp=sharing" },
            { name: "DİJİTAL ELEKTRONİK", link: "https://drive.google.com/drive/folders/1BxdL7aM2dyl4RAqSIF02nOZzHWfb0JPP?usp=sharing" },
            { name: "ENDÜSTRİYEL ELEKTRONİK", link: "https://drive.google.com/drive/folders/1l3UdyTlsYu9fKIpMskLn2ksPDCLHKoYe?usp=sharing" },
            { name: "AR-GE, İNOVASYON VE TEKNOLOJİ YÖNETİMİ", link: "https://drive.google.com/drive/folders/1AKDmRV5efKAX4ggJ-LWC5WMFA5gN6xJt?usp=sharing" },
            { name: "MİKRODENETLEYİCİLER", link: "https://drive.google.com/drive/folders/1X9U1HOCk-i_FoUsE2AKW-RrN_D3CF0tC?usp=sharing" },
            { name: "RF DEVRELERİNE GİRİŞ", link: "https://drive.google.com/drive/folders/1ZE5Eb17ll4Ch6sMRMcJhNgvSEAJpHHgv?usp=sharing" }
        ],
        2: [
            { name: "OTOMATİK KONTROL", link: "https://drive.google.com/drive/folders/1K8dP5qSO3T6o4ilVqkv-DtUN6m1FJyR9?usp=sharing" },
            { name: "HABERLEŞME MÜHENDİSLİĞİNİN TEMELLERİ", link: "https://drive.google.com/drive/folders/1cWzyRFfwbEszYf8E0gp2-Rm5uhSeFHOt?usp=sharing" },
            { name: "ELEKTROMAGNETİK DALGALAR TEORİSİ", link: "https://drive.google.com/drive/folders/1-4hjApP-3ZIPyiA4KBlPbkeHnyPdWri8?usp=sharing" },
            { name: "ELEKTRİK TESİSLERİ", link: "https://drive.google.com/drive/folders/17gMPjabaaDd-B_FJ2HmZQ6cnEEvOauL9?usp=sharing" },
            { name: "DİJİTAL ELEKTRONİK", link: "https://drive.google.com/drive/folders/1BxdL7aM2dyl4RAqSIF02nOZzHWfb0JPP?usp=sharing" },
            { name: "ENDÜSTRİYEL ELEKTRONİK", link: "https://drive.google.com/drive/folders/1l3UdyTlsYu9fKIpMskLn2ksPDCLHKoYe?usp=sharing" },
            { name: "AR-GE, İNOVASYON VE TEKNOLOJİ YÖNETİMİ", link: "https://drive.google.com/drive/folders/1AKDmRV5efKAX4ggJ-LWC5WMFA5gN6xJt?usp=sharing" },
            { name: "MİKRODENETLEYİCİLER", link: "https://drive.google.com/drive/folders/1X9U1HOCk-i_FoUsE2AKW-RrN_D3CF0tC?usp=sharing" }
        ]
    },
    4: {
        1: [ // 4. Sınıf dersleri tek bir listede birleştirildi, dönem 1 ve 2'de aynı dersler vardı
            { name: "HABERLEŞME LABORATUARI", link: "https://drive.google.com/drive/folders/1Q_HBeBwmY5-wiKTbY7O-3QpGYNjeptjc?usp=sharing" },
            { name: "ANTENLER", link: "https://drive.google.com/drive/folders/1mYoQ74z2PD9C-n1ao29B2vVgEGIfre0f?usp=sharing" },
            { name: "HİBRİD VE ELEKTRİKLİ ARAÇ TEKNOLOJİSİ", link: "https://drive.google.com/drive/folders/1UpDLVgoQmZTNLii-Pz5OkdpEIWlJvbyQ?usp=sharing" },
            { name: "TIP ELEKTRONİĞİ", link: "https://drive.google.com/drive/folders/1aD0ydMvpO4hteyeYuSyp0c1M8hu7CDLa?usp=sharing" },
            { name: "KONTROL LABORATUARI", link: "https://drive.google.com/drive/folders/1i_NCPJ6f4fYAMDUdHK1jpuoF1Zgu6aGl?usp=sharing" },
            { name: "NANOTEKNOLOJİNİN TEMELLERİ", link: "https://drive.google.com/drive/folders/1inoXFTdjyQ7M4VdKLaNLEjQ7b59qto2T?usp=sharing" },
            { name: "OPTİK HABERLEŞME", link: "https://drive.google.com/drive/folders/1LDKKqTavKsUo8xTcjfJOZOE6f5eIC0ub?usp=sharing" },
            { name: "OPTO ELEKTRONİK", link: "https://drive.google.com/drive/folders/1GgZ6o56p8t83F1Bo6IzNE5koHpa8qeAh?usp=sharing" },
            { name: "BİLGİSAYAR DESTEKLİ DEVRE TASARIMI", link: "https://drive.google.com/drive/folders/1O49pGj8jY4AkzdhysJHuxIjoLEL6qXTo?usp=sharing" },
            { name: "FOTONİK UYGULAMALARI", link: "https://drive.google.com/drive/folders/1Vzte9X0UuD-w-amqRwUOA48fLXr3AoRQ?usp=sharing" },
            { name: "DEVRE SENTEZİ", link: "https://drive.google.com/drive/folders/14XvCcKTr7BZXlKsTsi8xMeBiK4EGwwIQ?usp=sharing" },
            { name: "TASARIM ALGORİTMALARI", link: "https://drive.google.com/drive/folders/1biPCwUYouW7-WHzqqtT5Mr2qbgNZ8Fxt?usp=sharing" },
            { name: "ELEKTROMAGNETİK ALANLARIN BİYOLOJİK ETKİLERİ", link: "https://drive.google.com/drive/folders/1DWX9z3hAo47fUgEZ7xgkoX-VPqM2spFX?usp=sharing" },
            { name: "YAPAY ZEKA VE MÜHENDİSLİK UYGULAMALARI", link: "https://drive.google.com/drive/folders/1UTloU99byFvk08Yr5c_lswOsOsSbUjVx?usp=sharing" },
            { name: "BİLGİSAYARLI GÖRÜ", link: "https://drive.google.com/drive/folders/1VC_qek2XqIXSWd-fJbhbXYM656jw3dVC?usp=sharing" },
            { name: "GÖMÜLÜ SİSTEMLERİN UYGULAMALARI", link: "https://drive.google.com/drive/folders/1HdXn4fdcvaTzFyUN3AmjmdUOrtOcg8ph?usp=sharing" },
            { name: "BİYOMEDİKAL ENSTRUMANTASYON", link: "https://drive.google.com/drive/folders/15oFobI19xHbecz1r7WSpmxmZhJXd5mr5?usp=sharing" }
        ],
        2: [ // 4. Sınıf 2. Dönem dersleri (orijinalde 1. dönemle aynıydı, gerekirse burayı güncelleyebilirsiniz)
             { name: "YÜKSEK GERİLİM TEKNİĞİ", link: "https://drive.google.com/drive/folders/1NaRWCyfL5xPOa7V5-pHXKfjYBtFD6Pik?usp=sharing" },
            // ... Diğer 2. dönem seçmeli dersleri buraya eklenebilir
        ]
    }
};
