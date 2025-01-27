
  /* Problem View Interface Styles */
  .problem-view {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    height: 80%;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 1px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .problem-view.visible {
    opacity: 1;
    visibility: visible;
  }
  
  /* Problem Description Section */
  .problem-description {
    padding: 2rem;
    overflow-y: auto;
    border-right: 1px solid rgba(110, 237, 200, 0.2);
  }
  
  .problem-description h2 {
    font-size: 1.8rem;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
  }
  
  .difficulty-levels {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .difficulty-level {
    padding: 0.35rem 0.75rem;
    border-radius: 16px;
    font-size: 0.73rem;
    background: rgba(110, 237, 200, 0.1);
    color: var(--secondary-color);
    transition: all 0.3s ease;
  }
  
  .difficulty-level.completed {
    background: rgba(46, 213, 115, 0.2);
    color: #2ed573;
  }
  
  .difficulty-level.active {
    background: rgba(110, 237, 200, 0.3);
    border: 1px solid rgba(110, 237, 200, 0.5);
    font-weight: 600;
  }
  
  .problem-content {
    margin-top: 2rem;
  }
  
  .problem-content h3 {
    font-size: 1.2rem;
    color: var(--secondary-color);
    margin: 1.5rem 0 1rem;
  }
  
  .problem-content p {
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .problem-content pre {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(110, 237, 200, 0.2);
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    overflow-x: auto;
    color: #4a5568;
  }
  
  /* Code Editor Section */
  .code-editor {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #f8fafc;
  }
  
  .editor-header {
    padding: 1rem;
    border-bottom: 1px solid rgba(110, 237, 200, 0.2);
    background: white;
  }
  
  .language-select {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(110, 237, 200, 0.3);
    border-radius: 6px;
    background: white;
    color: var(--secondary-color);
    font-size: 0.9rem;
    cursor: pointer;
  }
  
  .editor-content {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .code-area {
    font-family: 'Fira Code', monospace;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #2d3748;
    background: #f8fafc;
    padding: 1rem;
    border-radius: 8px;
    height: 100%;
    min-height: 300px;
  }
  
  .editor-footer {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    background: white;
    border-top: 1px solid rgba(110, 237, 200, 0.2);
  }
  
  .run-code-btn, 
  .submit-code-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .run-code-btn {
    background: white;
    border: 1px solid rgba(110, 237, 200, 0.5);
    color: var(--secondary-color);
  }
  
  .run-code-btn:hover {
    background: rgba(110, 237, 200, 0.1);
  }
  
  .submit-code-btn {
    background: var(--gradient-primary);
    border: none;
    color: white;
  }
  
  .submit-code-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(110, 237, 200, 0.2);
  }
  
  /* Scrollbar Styling */
  .problem-description::-webkit-scrollbar,
  .editor-content::-webkit-scrollbar {
    width: 6px;
  }
  
  .problem-description::-webkit-scrollbar-track,
  .editor-content::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .problem-description::-webkit-scrollbar-thumb,
  .editor-content::-webkit-scrollbar-thumb {
    background-color: rgba(110, 237, 200, 0.5);
    border-radius: 3px;
  }