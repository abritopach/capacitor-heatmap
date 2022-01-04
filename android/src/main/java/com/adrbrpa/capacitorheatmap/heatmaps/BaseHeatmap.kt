package com.adrbrpa.capacitorheatmap.heatmaps

interface BaseHeatmap {

    fun initialize()
    fun destroy()
    /*********/
    // Methods for handling heatmap data.
    /*********/
    fun setData()
    fun getData()
    fun getValueAt()
    fun clearData()
    fun addPoint()
    fun setMax()
    /*********/
    // Methods for rendering heatmap.
    /*********/
    fun draw()
    /*********/
    // Methods for handling heatmap appearance.
    /*********/
    fun resize()
    fun gradient()
    fun opacity()
    fun radius()
    /*********/
    // Method to obtain the image of the canvas.
    /*********/
    fun getDataURL()
}