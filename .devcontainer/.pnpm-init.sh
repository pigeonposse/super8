#!/bin/bash

# #############################################################################
# PNPM INTI
# #############################################################################
#
# @description This file is for pnpm init
#
# #############################################################################

np prune -w

rm -rf $PROJECT/.pnpm-store
rm -rf $PROJECT/node_modules

np i --fix-lockfile -w
