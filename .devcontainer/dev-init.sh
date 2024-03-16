#!/bin/bash

# #############################################################################
# Dev init file
# #############################################################################
#
# @description This file is displayed on container init
#
# #############################################################################

ZSHRC_FILE=~/.zshrc

# Remove existing PIGEONPOSSE EDITS section from ~/.zshrc, if it exists
sed -i '/# PIGEONPOSSE EDITS - START/,/# PIGEONPOSSE EDITS - END/d' "$ZSHRC_FILE"

# Append the PIGEONPOSSE EDITS section to ~/.zshrc
cat << 'EOF' >> "$ZSHRC_FILE"
######################################################################
# PIGEONPOSSE EDITS - START
######################################################################

# VARS
export PROJECT="/workspaces"
export DEVCONTAINER="$PROJECT/.devcontainer"

# INTRO MESSAGE
[[ ! -f "$DEVCONTAINER"/.intro-msg.sh ]] || . "$DEVCONTAINER"/.intro-msg.sh

# CUSTOM ALIASES
[[ ! -f "$DEVCONTAINER"/.aliasrc.sh ]] || . "$DEVCONTAINER"/.aliasrc.sh

######################################################################
# PIGEONPOSSE EDITS - END
######################################################################
EOF

. "$ZSHRC_FILE"  # Sourcing the updated ~/.zshrc file
np i --fix-lockfile -w
