import React from "react";
import QuizSettingsForm from "./QuizSettingsForm"

export const Home = ({ settings, handlePlayButton, handleFormChange }) => {
    return (
        <div className="home-component">
            <h1>Trivium</h1>
            <p className="home-component-descriptions">API based Random Trivia Quiz</p>
            <QuizSettingsForm
                settings={settings}
                handleFormChange={handleFormChange}
            />
            <button
                onClick={handlePlayButton}
                className="home-component-button"
            >
                Start Quiz
            </button>
        </div>
    );
}
