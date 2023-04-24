
// not be used any more
pipeline {
    agent any
    tools {
        nodejs 'nodeJsInstallationName'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    def scmVars = checkout([
                        $class: 'GitSCM',
                        branches: [[name: 'PR-branch']],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [[$class: 'CleanCheckout']],
                        submoduleCfg: [],
                        userRemoteConfigs: [[
                            url: 'https://github.com/mo3tssem/devops',
                            refspec: '+refs/pull/*/head:refs/remotes/origin/PR-branch'
                        ]]
                    ])
                    env.GIT_COMMIT = scmVars.GIT_COMMIT
                }
            }
        }
        stage('1.....Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('2...Run tests') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        always {
            script {
                if (currentBuild.result == 'SUCCESS') {
                    githubNotify(context: 'Jenkins CI', description: 'All tests passed successfully', gitApiToken: env.GITHUB_TOKEN, status: 'SUCCESS', targetUrl: env.BUILD_URL)
                } else {
                    githubNotify(context: 'Jenkins CI', description: 'Tests failed', gitApiToken: env.GITHUB_TOKEN, status: 'FAILURE', targetUrl: env.BUILD_URL)
                }
            }
        }
    }
}
