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
        
        stage('npm install'){
            
            steps{             
                  
                sh 'npm install'
                       
                
            }
        }
       
        }
        
}
