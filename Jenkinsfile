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
        stage('npm Build'){
            
            steps{             
                  node --version
                  cd frontend
                  sh 'npm install'
                       
                
            }
        }
       
        }
        
}
