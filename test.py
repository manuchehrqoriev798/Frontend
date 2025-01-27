import os

def create_project_structure():
    base_dir = "src"
    
    structure = {
        "components": {
            "common": [
                "Navbar.jsx",
                "Footer.jsx",
                "Button.jsx",
                "LoadingSpinner.jsx",
                "AnimatedCard.jsx",
                "Modal.jsx",
                "Tooltip.jsx",
                "FeaturePanel.jsx"  # Moved here for reusability
            ],
            "auth": [
                "Login.jsx",
                "SignUp.jsx",
                "ForgotPassword.jsx",
                "ResetPassword.jsx"
            ],
            "dashboard": {
                "panels": [
                    "StatsPanel.jsx",
                    "RankingsPanel.jsx",
                    "NotificationsPanel.jsx",
                    "LearningProgressPanel.jsx",
                    "index.js"
                ]
            },
            "landing": {
                "sections": [
                    "HeroSection.jsx",
                    "HowItWorksSection.jsx",
                    "FeaturedSection.jsx",
                    "AIToolsSection.jsx",
                    "PricingSection.jsx",
                    "index.js"
                ]
            },
            "animations": [  # Shared reusable animations
                "LoadingSpinner.jsx",
                "AnimatedCard.jsx",
                "index.js"
            ]
        },
        "features": {
            "structuredLearning": {  # camelCase for consistency
                "components": [
                    "CourseCreator.jsx",
                    "CourseList.jsx"
                ],
                "pages": [
                    "CreateCourse.jsx",
                    "CourseCatalog.jsx"
                ],
                "animations": [  # Feature-specific animations
                    "StructuredLearningAnimation.jsx"
                ]
            },
            "engineeringMindset": {  # camelCase for consistency
                "components": [
                    "ProblemSolver.jsx",
                    "ContestHub.jsx"
                ],
                "pages": [
                    "ProblemHub.jsx",
                    "Contests.jsx"
                ],
                "animations": [  # Feature-specific animations
                    "EngineeringMindsetAnimation.jsx"
                ]
            },
            "startupSimulation": {  # camelCase for consistency
                "components": [
                    "StartupFinder.jsx",
                    "StartupSimulator.jsx"
                ],
                "pages": [
                    "StartupHub.jsx",
                    "Simulation.jsx"
                ],
                "animations": [  # Feature-specific animations
                    "StartupSimulationAnimation.jsx"
                ]
            }
        },
        "pages": [
            "Home.jsx",      # Landing page
            "Dashboard.jsx"  # Main dashboard
        ],
        "routes": [
            "index.js",
            "PrivateRoute.jsx",
            "PublicRoute.jsx"
        ],
        "hooks": [
            "useAuth.js",
            "useApi.js",
            "useAnimation.js",
            "useTheme.js",
            "useNotification.js"
        ],
        "context": [
            "AuthContext.js",
            "ThemeContext.js",
            "NotificationContext.js"
        ],
        "services": [
            "api.js",
            "auth.js",
            "storage.js",
            "analytics.js",
            "notification.js"
        ],
        "styles": {
            "": [
                "global.css",
                "variables.css",
                "animations.css",
                "theme.css"
            ],
            "components": [
                "buttons.css",
                "cards.css",
                "forms.css",
                "layout.css"
            ]
        },
        "utils": [
            "helpers.js",
            "constants.js",
            "validation.js",
            "formatters.js"
        ],
        "assets": {
            "images": [],
            "icons": [],
            "animations": []
        },
        "tests": {  # Tests folder
            "components": [
                "Navbar.test.jsx",
                "Footer.test.jsx",
                "FeaturePanel.test.jsx"  # Test for the shared FeaturePanel
            ],
            "hooks": [
                "useAuth.test.js"
            ],
            "pages": [
                "Home.test.jsx"
            ]
        }
    }

    def create_structure(structure, current_path):
        if isinstance(structure, list):
            for item in structure:
                if isinstance(item, dict):
                    for key, value in item.items():
                        sub_path = os.path.join(current_path, key)
                        os.makedirs(sub_path, exist_ok=True)
                        create_structure(value, sub_path)
                else:
                    file_path = os.path.join(current_path, item)
                    with open(file_path, 'w') as f:
                        if item.endswith(".jsx") or item.endswith(".js"):
                            f.write(f'// Placeholder for {item}\n')
                        elif item.endswith(".css"):
                            f.write(f'/* Placeholder for {item} */\n')
        elif isinstance(structure, dict):
            for key, value in structure.items():
                path = os.path.join(current_path, key)
                os.makedirs(path, exist_ok=True)
                create_structure(value, path)

    # Create base directory and App.jsx
    os.makedirs(base_dir, exist_ok=True)
    with open(os.path.join(base_dir, "App.jsx"), 'w') as f:
        f.write('// App.jsx placeholder\n')

    # Create .env file for environment variables
    with open(os.path.join(base_dir, ".env"), 'w') as f:
        f.write('# Environment variables\n')
        f.write('API_URL=http://localhost:5000\n')

    # Create the structure
    create_structure(structure, base_dir)
    print("Project structure created successfully!")

if __name__ == "__main__":
    create_project_structure()