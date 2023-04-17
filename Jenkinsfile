pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://mo3tssem@dev.azure.com/mo3tssem/curamet/_git/node-api'
      }
    }
    stage('1- Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('2- Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}
