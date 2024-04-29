pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
        }
    }
    stages {
        stage('Initialize') {
            def dockerHome = tool 'myDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
        stage('install playwright') {
            steps {
                sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
            }
        }
        stage('help') {
            steps {
                sh 'npx playwright test --help'
            }
        }
        stage('test') {
            steps {
                sh '''
          npx playwright test --list
          uname=jai password=ganesh CI=1 npx playwright test
        '''
            }
            post {
                success {
                    archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
                    sh 'rm -rf *.png'
                }
            }
        }
    }
}
