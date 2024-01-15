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
        
        stage('Build Angular App') {
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
       
        }
        
}
