(function() {
    if (window.screen.width <= 775) {
        var links = document.querySelectorAll('.disable-small');
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            link.addEventListener("click", function(e) {
                e.preventDefault();
            }, false);
        }
    }
})()

const translations = {
  en: {
    about: "about",
    about1: "based in Hungary",
    about2: "high school student",
    about3: "learning computer science",
    about4: "tea enthusiast",
    skills: "skills",
    contact: "contact",
    projects: "project",
    projects1: "the eisenhower matrix is an effective and rather simple time management technique which helps you battle time management issues, as well as prioritizing said tasks",
  },
  jp: {
    about: "自記紹介",
    about1: "ハンガリーに住んでる",
    about2: "高校生",
    about3: "情報工学を学ぶ",
    about4: "お茶が大好きだ",
    skills: "技術力",
    contact: "連絡",
    projects: "プロジェクト",
    projects1: "アイゼンハワー・マトリックスは、時間管理の問題に対処し、タスクの優先順位を決めるのに役立つ、効果的で易しい時間管理手法だ。",
  },
  hu: {
    about: "rólam",
    about1: "Magyarországon élek",
    about2: "középiskolai diák",
    about3: "számítástechnikát tanulok",
    about4: "szeretek teázni",
    skills: "készségek",
    contact: "elérhetőség",
    projects: "projektek",
    projects1: "az eisenhower-mátrix hatékony és egyszerű időbeosztási technika, amely segít az időbeosztással kapcsolatos problémák leküzdésében, valamint a teendők fontosságának meghatározásában",
  },
};

