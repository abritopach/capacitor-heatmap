package com.adrbrpa.capacitorheatmap.heatmaps

import android.content.Context
import android.graphics.*
import android.util.AttributeSet
import android.util.Log
import android.view.View
import androidx.annotation.ColorInt
import com.adrbrpa.capacitorheatmap.capacitorheatmap.R
import com.adrbrpa.capacitorheatmap.data.models.Point

class SimpleHeatmap @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr), BaseHeatmap {

    private val TAG: String = SimpleHeatmap::class.java.simpleName

    /**
     * The data that will be displayed in the heatmap.
     */
    private var data: MutableList<Point>? = null

    /**
     * A buffer for new data that hasn't been displayed yet.
     */
    private var dataBuffer: MutableList<Point>? = null

    /**
     * Whether the information stored in dataBuffer has changed.
     */
    private var dataModified = false

    /**
     * The value that corresponds to the minimum of the gradient scale.
     */
    private var min = Double.NEGATIVE_INFINITY

    /**
     * The value that corresponds to the maximum of the gradient scale.
     */
    private var max = Double.POSITIVE_INFINITY

    /**
     * The amount of blur to use.
     */
    private val mBlur = 0.85

    /**
     * The radius (px) of the circle each data point takes up.
     */
    private val mRadius = 200.0

    /**
     * If greater than 0 this will be used as the transparency for the entire map.
     */
    private var opacity = 0

    /**
     * The minimum opacity to use in the map. Only used when [HeatMap.opacity] is 0.
     */
    private val minOpacity = 0

    /**
     * The maximum opacity to use in the map. Only used when [HeatMap.opacity] is 0.
     */
    private val maxOpacity = 255

    /**
     * The bounds of actual data. For the sake of efficiency this stops us updating outside
     * of where data is present.
     */
    private val mRenderBoundaries = DoubleArray(4)

    /**
     * Colors to be used in building the gradient.
     */
    @ColorInt
    private val colors = intArrayOf(-0x10000, -0xff0100)

    /**
     * The stops to position the colors at.
     */
    private val positions = floatArrayOf(0.0f, 1.0f)

    /**
     * A paint for solid black.
     */
    private var mBlack: Paint? = null

    private val mTransparentBackground = true

    /**
     * A paint for the background fill.
     */
    private var mBackground: Paint? = null

    /**
     * A paint to be used to fill objects.
     */
    private var mFill: Paint? = null

    /**
     * The color palette being used to create the radial gradients.
     */
    private var palette: IntArray? = null

    /**
     * Whether the palette needs refreshed.
     */
    private var needsRefresh = true

    /**
     * Update the shadow layer when the size changes.
     */
    private var sizeChange = false

    /**
     * The top padding on the heatmap.
     */
    private val mTop = 0f

    /**
     * The left padding on the heatmap.
     */
    private val mLeft = 0f

    /**
     * The right padding on the heatmap.
     */
    private val mRight = 0f

    /**
     * The bottom padding on the heatmap.
     */
    private val mBottom = 0f

    /**
     * The maximum width of the rendering surface.
     */
    private val mMaxWidth = 0

    /**
     * The maximum height of the rendering surface.
     */
    private val mMaxHeight = 0

    /**
     * The aspect ratio scale.
     */
    private val mScale: Float? = null

    /**
     * The bitmap that the shadow layer is rendered into.
     */
    private val mShadow: Bitmap? = null

    /**
     * Should the drawing cache be used or should a new bitmap be created.
     */
    private val mUseDrawingCache = false

    init {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmap::init method called")
        initialize()
        context.theme.obtainStyledAttributes(
            attrs,
            R.styleable.SimpleHeatmap,
            0, 0).apply {

            try {
                opacity = getInteger(R.styleable.SimpleHeatmap_opacity, -1)
            } finally {
                recycle()
            }
        }
    }

    override fun initialize() {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmap::initialize method called")
        mBlack = Paint()
        mBlack?.color = -0x1000000
        mFill = Paint()
        mFill?.style = Paint.Style.FILL
        mBackground = Paint()
        if (!mTransparentBackground) mBackground?.color = -0x10102
        data = ArrayList<Point>()
        dataBuffer = ArrayList<Point>()
        if (mUseDrawingCache) {
            this.isDrawingCacheEnabled = true
            this.drawingCacheBackgroundColor = Color.TRANSPARENT
        }
    }

    override fun destroy() {
        TODO("Not yet implemented")
    }

    override fun setData() {
        TODO("Not yet implemented")
    }

    override fun getData() {
        TODO("Not yet implemented")
    }

    override fun getValueAt() {
        TODO("Not yet implemented")
    }

    override fun clearData() {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmap::clearData method called")
        dataBuffer?.clear()
        dataModified = true
    }

    override fun addPoint(point: Point) {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmap::addPoint method called" +
                "-> point: $point")
        dataBuffer?.add(point)
        dataModified = true
    }

    override fun setMax(max: Double) {
        this.max = max;
    }

    override fun setMin(min: Double) {
        this.min = min
    }

    override fun draw() {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmap::draw method called")
        val bit = Bitmap.createBitmap(256, 1, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bit)
        val grad = LinearGradient(0f, 0f, 256f, 1f, colors, positions, Shader.TileMode.CLAMP)
        val paint = Paint()
        paint.style = Paint.Style.FILL
        paint.shader = grad
        canvas.drawLine(0f, 0f, 256f, 1f, paint)
        palette = IntArray(256)
        bit.getPixels(palette, 0, 256, 0, 0, 256, 1)
        if (dataModified) {
            data?.clear()
            dataBuffer?.let { data?.addAll(it) }
            dataBuffer!!.clear()
            dataModified = false
        }
    }

    override fun resize() {
        TODO("Not yet implemented")
    }

    override fun gradient() {
        TODO("Not yet implemented")
    }

    override fun opacity() {
        TODO("Not yet implemented")
    }

    override fun radius() {
        TODO("Not yet implemented")
    }

    override fun getDataURL() {
        TODO("Not yet implemented")
    }
}