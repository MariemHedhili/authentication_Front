pipeline{
    

    agent any 
    
    stages {
        
        stage('Git Checkout'){
            
            steps{
                
                script{
                    
                    git branch: 'main', url: 'https://github.com/MariemHedhili/authentication_Front.git'
                }
            }
        }
        
        stage('Buil Angular App') {
            steps {
                script {
                    // Use the Node.js and npm installation defined in Jenkins configuration
                    def nodejsInstallation = tool name: 'node:20.10', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejsInstallation}/bin:${env.PATH}"
                    // Change to the Angular app directory
                    dir('frontend') {
                        // Install dependencies and node modules
                        
                        sh 'npm install'
                    }
                }
            }
        }
       
        stage('SonarQube Analysis') {
            environment {
                SCANNER_HOME = tool 'SonarQube'
                PROJECT_NAME = "authentication_Front"
            }
            steps {
                            
                withSonarQubeEnv(credentialsId: 'sonar-credentials',installationName: 'SonarServer') {
                    sh """$SCANNER_HOME/bin/sonar-scanner \
                        -Dsonar.projectKey=$PROJECT_NAME \
                        -Dsonar.sources=. """
                    
                }              
            }
        }

        stage('Upload app to nexus') {
            steps {
                
                sh "tar -czvf frontapp.tar.gz ./frontend"
                nexusArtifactUploader artifacts: [[artifactId: 'frontapp', classifier: '', file: 'frontapp.tar.gz', type: 'tar.gz']], credentialsId: 'nexus-credentials', groupId: 'frontend', nexusUrl: 'nexus:8081', nexusVersion: 'nexus3', protocol: 'http', repository: 'maven-central-repo', version: "1.${env.BUILD_NUMBER}.0"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dir('frontend') {
                        sh 'docker build -t authentication-front .'
                    }
                }
            }
        }

        stage('Push image to DockerHub') {
            
            steps {
                script {
               
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        sh "echo \${DOCKERHUB_PASSWORD} | docker login -u \${DOCKERHUB_USERNAME} --password-stdin"
                        // Add the docker push step here
                        docker.withRegistry("https://registry.hub.docker.com", 'dockerhub-credentials') {
                            docker.image("${DOCKERHUB_USERNAME}/auth-front:authentication-front-${env.BUILD_NUMBER}").push()
                        }
                    }
                }
            }
            
        }
    }     
}
