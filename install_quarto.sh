#!/bin/bash

# Download Quarto CLI
curl -LO https://quarto.org/download/latest/quarto-linux-amd64.deb

# Install Quarto CLI
sudo dpkg -i quarto-linux-amd64.deb

# Clean up
rm quarto-linux-amd64.deb
