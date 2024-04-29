pipeline {
    agent any
    
    environment {
        NODE_VERSION = '14'
        PLAYWRIGHT_BROWSER = 'chromium' // You can change this to 'firefox' or 'webkit' based on your needs
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Check out the code from a Git repository
                git 'https://github.com/your/repository.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Use Node.js container to install dependencies
                container('nodejs') {
                    // Install Node.js and npm
                    sh 'curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -'
                    sh 'apt-get install -y nodejs'
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                container('nodejs') {
                    // Run Playwright tests
                    sh 'uname=jai password=ganesh CI=1 npx playwright test'
                }
            }
        }
    }
    
    post {
        success {
            // Actions to perform if the pipeline succeeds
            echo 'Tests passed! Ready for deployment.'
        }
        failure {
            // Actions to perform if the pipeline fails
            echo 'Tests failed! Check the test results for details.'
        }
    }
}
