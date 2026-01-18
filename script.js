// script.js - Basic functionality for AI Code Commenter 
// currently adds simple placeholder comments 
// will integrate your actual AI commenting logic later.

document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('run-button');
    const inputCode = document.getElementById('input-code');
    const outputCode = document.getElementById('output-code');
    const languageSelect = document.getElementById('language');

    runButton.addEventListener('click', function() {
        const code = inputCode.value.trim();
        const language = languageSelect.value;

        if (!code) {
            alert('Please enter some code to comment.');
            return;
        }

        // Simulate AI commenting (placeholder - replace with actual API call)
        const commentedCode = addComments(code, language);
        outputCode.value = commentedCode;
    });

    function addComments(code, language) {
        // Placeholder function - in real implementation, this would call your AI service
        const lines = code.split('\n');
        const commentedLines = lines.map((line, index) => {
            if (line.trim() === '') return line;
            // Simple rule-based commenting for demo
            if (language === 'python') {
                if (line.includes('def ')) return `# Function definition\n${line}`;
                if (line.includes('for ')) return `# Loop to iterate\n${line}`;
                if (line.includes('if ')) return `# Conditional statement\n${line}`;
                if (line.includes('print(')) return `# Output to console\n${line}`;
            }
            // Add more rules for other languages
            return line;
        });
        return commentedLines.join('\n');
    }
});