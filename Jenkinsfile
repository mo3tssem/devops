pipeline {
    agent any
    tools {
        nodejs 'nodeJsInstallationName'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mo3tssem/devops'
            }
        }
        stage('1.....Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('2...Run tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
