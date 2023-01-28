import React, { useState } from "react";

const QuizSettingsForm = ({ settings, handleFormChange }) => {
    return (
        <div className="question-settings">
            <p>Number of Questions:</p>
            <div className="question-settings-radio">
                <input
                    id="question-settings-amount-5"
                    name="quizAmount"
                    type="radio"
                    value="5"
                    checked={settings.quizAmount === 5}
                    onChange={handleFormChange}
                />
                <label htmlFor="question-settings-amount-5">5</label>
                <input
                    id="question-settings-amount-10"
                    name="quizAmount"
                    type="radio"
                    value="10"
                    checked={settings.quizAmount === 10}
                    onChange={handleFormChange}
                />
                <label htmlFor="question-settings-amount-10">10</label>
                <input
                    id="question-settings-amount-15"
                    name="quizAmount"
                    type="radio"
                    value="15"
                    checked={settings.quizAmount === 15}
                    onChange={handleFormChange}
                />
                <label htmlFor="question-settings-amount-15">15</label>
                <input
                    id="question-settings-amount-20"
                    name="quizAmount"
                    type="radio"
                    value="20"
                    checked={settings.quizAmount === 20}
                    onChange={handleFormChange}
                />
                <label htmlFor="question-settings-amount-20">20</label>
                <input
                    id="question-settings-amount-custom"
                    name="quizAmount"
                    type="number"
                    min="1"
                    max="50"
                    value={settings.quizAmount}
                    onChange={handleFormChange}
                />
            </div>
            <label htmlFor="quizSettingsCategory">Category:</label>
            <select
                id="quiz-settings-category"
                name="quizSettingsCategory"
                className="quiz-settings-select"
                onChange={handleFormChange}
                value={settings.quizSettingsCategory}
            >
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
            </select>
            <label htmlFor="quizSettingsDifficulty">Difficulty:</label>
            <select
                id="quiz-settings-difficulty"
                name="quizSettingsDifficulty"
                className="quiz-settings-select"
                onChange={handleFormChange}
                value={settings.quizSettingsDifficulty}
            >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <label htmlFor="quizSettingsType">Quiz Type:</label>
            <select
                id="quiz-settings-type"
                name="quizSettingsType"
                className="quiz-settings-select"
                onChange={handleFormChange}
                value={settings.quizSettingsType}
            >
                <option value="">Any Type</option>
                <option value="multiple">Multiple</option>
                <option value="boolean">True or False</option>
            </select>
            <label htmlFor="quizSettingsLimit">Time Limit:</label>
            <select
                id="quiz-settings-limit"
                name="quizSettingsLimit"
                className="quiz-settings-select"
                onChange={handleFormChange}
                value={settings.quizSettingsLimit}
            >
                <option value="none">None</option>
                <option value="60">1 Minute</option>
                <option value="300">5 Minutes</option>
                <option value="600">10 Minutes</option>
                <option value="900">15 Minutes</option>
                <option value="1200">20 Minutes</option>
                <option value="1500">25 Minutes</option>
                <option value="1800">30 Minutes</option>
            </select>
        </div >
    )
}

export default QuizSettingsForm;