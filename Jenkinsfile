pipeline{
    
    agent any 
    
    env.NODEJS_HOME = "${tool 'Node-20.10'}"
    env.PATH="${env.JAVA_HOME}/bin:${env.PATH}:${env.NODEJS_HOME}/bin:${env.PATH}"
    
    stages {
        
        stage('Git Checkout'){
            
            steps{
                
                script{
                    
                    git branch: 'main', url: 'https://github.com/MariemHedhili/authentication_Front.git'
                }
            }
        }
        
        stage('npm install'){
            
            steps{             
                  
                sh 'npm install'
                                       
            }
        }
       
        }
        
}
