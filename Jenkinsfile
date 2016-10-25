node {
	stage 'Git Checkout'
		git url: 'https://github.com/treselle-workbench/node_frontend_poc.git'
	if(sh " sudo docker inspect -f {{.State.Running}} node_frontend"){
		stage 'Container cleanup'
			sh "sudo docker stop node_frontend"
			sh "sudo docker rm node_frontend"
			sh "sudo docker rmi node_frontend"
	}
	stage 'Build Docker Image'
		sh "sudo docker build -t node_frontend ."
	}	
	stage 'Run Docker Container'
		sh "sudo docker run --name node_frontend -p 3004:3004 -d node_frontend"
}