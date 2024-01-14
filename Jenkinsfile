pipeline{
    
    agent any 
    environment {
        NODEJS_HOME = tool 'NodeJS' 
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        
        stage('Git Checkout'){
            
            steps{
                
                script{
                    
                    git branch: 'main', url: 'https://github.com/MariemHedhili/authentication_Front.git'
                }
            }
        }
        stage('npm Build'){
            
            steps{             
                                   
                  sh 'npm install'
                       
                
            }
        }
       
        }
        
}
