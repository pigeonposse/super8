# #############################################################################
# ALIASRC
# #############################################################################
#
# @description Set all ALIAS for project
#
# #############################################################################


# ZSH
alias zsh-refresh=". ~/.zshrc"
alias zsh-edit="nano ~/.zshrc"
alias zsh-r="zsh-refresh"
alias zsh-e="zsh-edit"
# ALIAS
alias alias-refresh=". $DEVCONTAINER/.aliasrc.sh"
alias alias-edit="nano $DEVCONTAINER/.aliasrc.sh"
alias alias-r="alias-refresh"
alias alias-e="alias-edit"
# DIRS
alias cats='highlight -O ansi --force'
alias rall='_rall() { rm -r $1 && lsa }; _rall'
alias lsa="exa --all --all --header --group --long --icons"
alias trees="exa --all --icons --tree"
alias trees-n='_t_n() { exa --all --icons --tree --level=$1 $2}; _t_n'
alias check-port='_p(){lsof -i :$@}; _p'
# Packages
alias np='pnpm'
