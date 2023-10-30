# ADD ALPINE & NODE
FROM node:21.1.0-alpine3.18

# ADD zsh & oh-my-zsh & git & vim & zsh-autosuggestions & zsh-syntaxhighlighting
# @see: https://github.com/snkshukla/docker-alpine-zsh/tree/master
RUN apk update
RUN apk add --no-cache zsh git vim bind-tools curl figlet exa zsh-autosuggestions zsh-syntax-highlighting
RUN sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
RUN echo "source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
RUN echo "source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc

# ADD PNPM
# @see: https://pnpm.io/installation
RUN npm install -g pnpm

# WORDKINDIR
# WORKDIR /workspaces

# OPEN ZSH
RUN /bin/zsh

