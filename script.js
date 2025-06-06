document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ເກີດເມື່ອວັນທີໃດ?",
            options: ["18 ມັງກອນ 2000", "18 ມັງກອນ 2001", "18 ກຸມພາ 2001", "18 ກໍລະກົດ 2001"],
            answer: "18 ມັງກອນ 2001",
            explanation: "ເພິ່ນເກີດວັນທີ 18 ມັງກອນ ປີ 2001."
        },
        {
            question: "ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ປະສູດຢູ່ທີ່ໃດ?",
            options: ["ບ້ານຫາດຮວາຍ, ເມືອງປາກແຊງ, ແຂວງຫຼວງພະບາງ", "ເມືອງຫ້ວຍຊາຍ, ແຂວງບໍ່ແກ້ວ", "ນະຄອນຫຼວງວຽງຈັນ", "ແຂວງຫົວພັນ"],
            answer: "ບ້ານຫາດຮວາຍ, ເມືອງປາກແຊງ, ແຂວງຫຼວງພະບາງ",
            explanation: "ເພິ່ນປະສູດທີ່ບ້ານຫາດຮວາຍ, ເມືອງປາກແຊງ, ແຂວງຫຼວງພະບາງ."
        },
        {
            question: "ຊື່ພາສາອັງກິດທີ່ຊາວຕ່າງຊາດຕັ້ງໃຫ້ ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ແມ່ນຫຍັງ?",
            options: ["ໂຊເຟຍ", "ຄູບາລີໂອ", "ເຝີຍຍ່າງ", "ເສີນອີ"],
            answer: "ຄູບາລີໂອ",
            explanation: "ຊື່ພາສາອັງກິດທີ່ຊາວຕ່າງຊາດຕັ້ງໃຫ້ຄື 'ຄູບາລີໂອ' (Le o)."
        },
        {
            question: "ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ຮຽນຈົບຊັ້ນປະຖົມສຶກສາປີທີ 5 ໃນປີໃດ?",
            options: ["2012", "2013", "2014", "2015"],
            answer: "2013",
            explanation: "ເພິ່ນຮຽນຈົບຊັ້ນປະຖົມສຶກສາປີທີ 5 ໃນວັນທີ 30 ມິຖຸນາ ປີ 2013."
        },
        {
            question: "ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ບວດຢູ່ທີ່ວັດແຫ່ງທຳອິດຊື່ວ່າຫຍັງ?",
            options: ["ວັດຈອມເຂົາ", "ວັດຫ້ວຍແດນ", "ວັດນ້ຳຖ້ວມໃຕ້", "ວັດສີສະເກດ"],
            answer: "ວັດນ້ຳຖ້ວມໃຕ້",
            explanation: "ເພິ່ນບວດຢູ່ທີ່ວັດນ້ຳຖ້ວມໃຕ້, ເມືອງນ້ຳບາກ, ແຂວງຫຼວງພະບາງ."
        },
        {
            question: "ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ຈົບປະລິນຍາຕີສາຂາຄູພາສາອັງກິດໃນວັນທີໃດ?",
            options: ["11 ຕຸລາ 2023", "25 ພະຈິກ 2024", "1 ມັງກອນ 2025", "27 ພຶດສະພາ 2019"],
            answer: "1 ມັງກອນ 2025",
            explanation: "ໃບປະກາດຈົບປະລິນຍາຕີສາຂາຄູພາສາອັງກິດແມ່ນອອກວັນທີ 25 ພະຈິກ 2024, ແຕ່ຮັບໃນວັນທີ 1 ມັງກອນ 2025."
        },
        {
            question: "ປັດຈຸບັນ ພຣະອາຈານ ປ.ຕ ບຸນຊົງ ອ່ອນມະນີຈັນ ປະຈຳຢູ່ແຂວງໃດ?",
            options: ["ຫຼວງພະບາງ", "ບໍ່ແກ້ວ", "ນະຄອນຫຼວງວຽງຈັນ", "ຫົວພັນ"],
            answer: "ຫົວພັນ",
            explanation: "ປັດຈຸບັນເພິ່ນຍັງຢູ່ແຂວງຫົວພັນ ປະຈຳຢູ່ທີ່ວັດພຸດທະສາມັກຄີທັມມາຣາມ (ບ້ານງີ້ວ)."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length; // Set total questions display
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        // Disable all option buttons after an answer is selected
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct'); // Highlight correct answer
            } else {
                button.classList.add('wrong'); // Highlight wrong answers
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block'; // Show next question button
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
