pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/mo3tssem/devops.git'
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
