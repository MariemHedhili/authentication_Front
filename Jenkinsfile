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
                
                script{
                    
                    nodejs('Node-20.10'){
                      sh ' npm install '
                    }   
                }
            }
        }
       
        }
        
}
